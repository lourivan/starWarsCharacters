import styled from 'styled-components/native'
import { Card, Title, Paragraph } from 'react-native-paper'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.accent};
  height: 100%;
  flex: 1;
`
export const DetailContainer = styled.View`
  padding: 20px 10px;
`
export const CardDetail = styled(Card)``
export const CardContent = styled(Card.Content)``
export const CardRowContent = styled(Card.Content)`
  margin-bottom: 20px;
`
export const DescColumn = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 15px;
`
export const CardTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
`
export const CardParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 300;
  color: #696969;
  margin-right: 10px;
  text-transform: capitalize;
`
export const HeaderTitle = styled(Title)`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin: 20px 0 10px 0;
`
export const Divider = styled.View`
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.accent};
  height: 8px;
`
export const DetailColumn = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 1;
`
