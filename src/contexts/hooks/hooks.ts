import { useContext } from 'react'
import { ThemeContextApi } from '../contextApi'

export function useThemeContextApi() {
  const contextApi = useContext(ThemeContextApi)

  return contextApi
}