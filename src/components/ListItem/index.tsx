import React from 'react'

import * as S from './style'
import { assignTestId } from '~/utils/qualityAssurance'

export interface ItemProps {
  title: string
  description?: string
  onPress?: () => void
}

export const ListItem: React.FC<ItemProps> = ({
  title,
  description = '',
  onPress,
}) => {
  const TAG = 'listItem'
  return (
    <S.Item
      {...assignTestId('TouchableOpacity', TAG)}
      title={title}
      description={description}
      right={(_props) => <S.IconRight />}
      onPress={onPress}
    />
  )
}
