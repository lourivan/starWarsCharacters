import styled from 'styled-components/native'
import { List } from 'react-native-paper'

export const Item = styled(List.Item).attrs({
  titleStyle: {
    color: '#000',
    fontSize: 22,
    fontWeight: '600',
  },
  descriptionStyle: {
    color: '#5B5B5B',
    fontSize: 18,
  },
})`
  border-bottom-width: 1px;
  border-bottom-color: #bcbaba;
`
export const IconRight = styled.Image.attrs({
  source: require('assets/images/arrowLeft.png'),
})`
  width: 8px;
  height: 18px;
  margin-right: 10px;
  margin-top: 20px;
`
