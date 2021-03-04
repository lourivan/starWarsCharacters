import React from 'react'
import { ActivityIndicator, Modal } from 'react-native'

import * as S from './style'

export const Loader = (props) => {
  const { loading } = props
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {}}
    >
      <S.ModalBackground>
        <S.ActivityIndicatorWrapper>
          <ActivityIndicator animating={loading} />
        </S.ActivityIndicatorWrapper>
      </S.ModalBackground>
    </Modal>
  )
}
