import React from 'react'
import { Modal } from 'react-native'
import LottieView from 'lottie-react-native'

import * as S from './style'

export const Loader = (props) => {
  const { loading } = props
  return (
    <Modal transparent={true} animationType={'none'} visible={loading}>
      <S.ModalBackground>
        <LottieView
          source={require('assets/lottie/star-wars.json')}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
      </S.ModalBackground>
    </Modal>
  )
}
