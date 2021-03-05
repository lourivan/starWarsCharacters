import styled from 'styled-components/native'
import { Button } from 'react-native-paper'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.text};
`
export const ErrorDescription = styled.View`
  margin: 30px 0;
`
export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
`
export const ButtonSkip = styled(Button)`
  margin-top: 40px;
`
