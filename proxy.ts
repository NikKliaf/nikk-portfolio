import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from '@/i18n.config'; 

const { locales, defaultLocale } = i18n;

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    
    const segments = pathname.split('/');
    const firstSegment = segments[1];

    if (pathname.startsWith('/api/') || pathname.startsWith('/_next/') || firstSegment?.includes('.')) {
      return NextResponse.next();
    }

    const url = new URL(`/${defaultLocale}${pathname}`, request.url);

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|images|icons|manifest.webmanifest|locales).*)',
  ],
};