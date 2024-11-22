import {createContext, FC, ReactNode, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface ThemeContextValue {
	theme: 'light' | 'dark'
	setTheme: (newTheme: 'light' | 'dark') => void
}

export const ThemeContext = createContext<ThemeContextValue | any[]>([])

export const ThemeProvider:FC <{children: ReactNode }> = ({ children }) => {
    const [theme, setTheme]: any = useLocalStorage('theme', 'light')
    
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={[theme, setTheme]} >
            {children}
        </ThemeContext.Provider>
    )
}