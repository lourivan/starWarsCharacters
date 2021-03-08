import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../'

interface IChildrenProps {
  children: any
}

export const ThemeProviderMock: React.FC<IChildrenProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
