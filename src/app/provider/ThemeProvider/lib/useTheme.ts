import { useContext, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext"

interface UseThemeResults{
    theme?: Theme,
    toggleTheme?: () => void
}

export const useTheme = (): UseThemeResults => {
    const { theme, setTheme } = useContext(ThemeContext)
    const toggleTheme = () => {
        let newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    return {theme, toggleTheme}
}