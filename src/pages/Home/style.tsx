import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.accent};
  height: 100%;
  flex: 1;
`
export const LoaderBottom = styled.ActivityIndicator`
  margin: 20px 0;
`
