import React, { useEffect } from 'react'

import * as S from './style'
import { Header } from '~/components/Header'

const Details: React.FC = ({ route, navigation }: any) => {
  const { url } = route.params
  useEffect(() => {
    console.log(url)
  }, [])

  return (
    <S.Container>
      <Header type='page' title='Detalhes' onBack={() => navigation.goBack()} />
    </S.Container>
  )
}

export default Details
