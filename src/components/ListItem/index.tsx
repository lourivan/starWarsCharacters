import React from 'react'

import * as S from './style'

interface ItemProps {
  title: string
  description?: string
  onPress?: () => void
}

export const ListItem: React.FC<ItemProps> = ({
  title,
  description = '',
  onPress,
}) => {
  return (
    <S.Item
      title={title}
      description={description}
      right={(_props) => <S.IconRight />}
      onPress={onPress}
    />
  )
}
