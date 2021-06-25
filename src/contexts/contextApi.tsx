import { createContext, useContext, ReactNode, useState } from 'react'
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'

type ThemeContextApiTypes = {
  toggleTheme: () => void
}

export const ThemeContextApi = createContext({} as ThemeContextApiTypes)

type ThemeProps = {
  children: ReactNode
}

export const ContextApi = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  
  // return (
  //   <ThemeContextApi.Provider value={{
  //     toggleTheme,
  //     // theme
  //   }}
  //   >
  //     { children }
  //   </ThemeContextApi.Provider>
  // )
}
