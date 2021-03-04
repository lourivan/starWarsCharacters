import React, { useMemo } from 'react'
import { Appbar } from 'react-native-paper'

import * as S from './style'

interface HeaderProps {
  type?: 'default' | 'page'
  onBack?: () => void
  title?: string
  subtitle?: string
}

export const Header: React.FC<HeaderProps> = ({
  type,
  onBack,
  title,
  subtitle,
}) => {
  const DefaultHeader = () => (
    <S.Container>
      <S.ImageHeader source={require('assets/images/logo.png')} />
    </S.Container>
  )

  const PageHeader = () => (
    <Appbar.Header>
      <Appbar.BackAction onPress={onBack} />
      <Appbar.Content title={title} subtitle={subtitle} />
    </Appbar.Header>
  )

  const render = useMemo(
    () => (type != 'default' ? <PageHeader /> : <DefaultHeader />),
    [type, title, subtitle, onBack],
  )

  return render
}
