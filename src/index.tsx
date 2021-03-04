import React from 'react'
import { StatusBar } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'styled-components/native'

import Pages from './pages'

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    accent: '#D0D0D0',
    text: '#fff',
  },
}

export const App: React.FC = () => {
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle='light-content' />
        <Pages />
      </ThemeProvider>
    </PaperProvider>
  )
}