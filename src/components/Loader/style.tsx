import styled from 'styled-components/native'

export const ModalBackground = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.text}};
`
export const ActivityIndicatorWrapper = styled.View`
  background-color: #ffffff;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
