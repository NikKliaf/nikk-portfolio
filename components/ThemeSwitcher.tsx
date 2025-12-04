'use client';
import { useTheme } from "next-themes";
import { todo } from "node:test";

export function ThemeSwitcher() {
  
  const { theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' 
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') 
    : theme;

  const isDark = currentTheme === 'dark';

  //TODO : make this shit work
  return (
    <label className="swap swap-rotate">
        <input 
            type="checkbox" 
            value="dark" 
            className="theme-controller" 
            onClick = {() => setTheme(isDark ? 'light' : 'dark')}
        />
            <span className="swap-off icon-[tabler--sun] size-7"></span>
            <span className="swap-on icon-[tabler--moon] size-7"></span>
    </label>
    
  );
}