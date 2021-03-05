import React from 'react'
import { Modal } from 'react-native'
import LottieView from 'lottie-react-native'

import * as S from './style'

export const ErrorModal = (props) => {
  const { isError, onRetry } = props
  return (
    <Modal transparent={true} animationType={'none'} visible={isError}>
      <S.Container>
        <LottieView
          source={require('assets/lottie/error-animation.json')}
          autoPlay
          loop={false}
          style={{ width: 200, height: 200 }}
        />
        <S.ErrorDescription>
          <S.ErrorText>Oops, Something Went Wrong</S.ErrorText>
          <S.ButtonSkip color={'#000'} onPress={onRetry} mode='contained'>
            Retry
          </S.ButtonSkip>
        </S.ErrorDescription>
      </S.Container>
    </Modal>
  )
}
