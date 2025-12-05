'use client';
import { useTheme } from "next-themes";
import {Button} from '@/components/ui/button'
import {IconSun, IconMoon } from "@tabler/icons-react"

export function ButtonOutline() {
    return <Button variant="outline"> Outline</Button>
}

export function ThemeSwitcher() {
  
  const { theme, setTheme } = useTheme()

  //TODO : make this shit work
  return (
    <Button variant="outline" size="icon"
    className="rounded-lg"
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <IconSun className="swap size-7 absolute rotate-0 scale-100 dark:-rotate-90 dark:scale-0"/>
        <IconMoon className="swap size-7 absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100"/>
        
    </Button>
  );
}