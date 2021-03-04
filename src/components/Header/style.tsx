import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding-top: 50px;
  padding-bottom: 20px;
`
export const ImageHeader = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 156px;
  height: 88px;
`
