import React, { useMemo } from 'react'
import { Appbar } from 'react-native-paper'

import * as S from './style'

import Logo from '../../../assets/images/logo.png'

export interface HeaderProps {
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
  const TAG = 'Header_component'
  const DefaultHeader = () => (
    <S.Container>
      <S.ImageHeader
        testID={`${TAG}_default_image`}
        source={require('../../../assets/images/logo.png')}
      />
    </S.Container>
  )

  const PageHeader = () => (
    <Appbar.Header>
      <Appbar.BackAction onPress={onBack} />
      <Appbar.Content
        title={title}
        subtitle={subtitle}
        titleStyle={{ fontSize: 20 }}
        subtitleStyle={{ fontSize: 16 }}
      />
    </Appbar.Header>
  )

  const render = useMemo(
    () => (type != 'default' ? <PageHeader /> : <DefaultHeader />),
    [type, title, subtitle, onBack],
  )

  return render
}
