import React, { useEffect, useCallback, useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '~/components/Header'
import { ListItem } from '~/components/ListItem'
import {
  getPeoplesList,
  peoplesPropsReponse,
  resultsProps,
} from '~/services/peoples'
import { Loader } from '~/components/Loader'
import { ErrorModal } from '~/components/ErrorModal'
import * as S from './style'

const Home: React.FC = ({ navigation }: any) => {
  const TAG = 'home'
  const [isLoading, setIsloading] = useState<boolean>(true)
  const [data, setData] = useState<peoplesPropsReponse>()
  const [listPeople, setListPeople] = useState<resultsProps[]>([])
  const [isError, setIsError] = useState<boolean>(false)

  const getPeople = useCallback(async (page) => {
    setIsError(false)
    try {
      if (typeof page == 'string') {
        const { data } = await getPeoplesList(page)
        const { results } = data
        setData(data)
        setListPeople((list) => [...list, ...results])
      }
    } catch (err) {
      if (!isLoading) {
        setTimeout(() => {
          setIsError(true)
        }, 500)
      }
    } finally {
      setTimeout(() => {
        setIsloading(false)
      }, 1000)
    }
  }, [])

  useEffect(() => {
    getPeople('')
  }, [])

  const rederItem = ({ item }) => (
    <ListItem
      title={item.name}
      description={item.gender}
      onPress={() => navigation.push('Details', { url: item.url })}
    />
  )

  return (
    <S.Container testID={TAG}>
      {isError && <ErrorModal onRetry={getPeople} />}
      {isLoading && <Loader />}
      <Header type='default' />
      {listPeople && (
        <FlatList
          data={listPeople}
          renderItem={rederItem}
          keyExtractor={(_item, key) => String(key)}
          showsVerticalScrollIndicator={false}
          onEndReached={() => getPeople(data?.next)}
          onEndReachedThreshold={0.01}
          scrollEnabled={!isLoading}
          ListFooterComponent={<S.LoaderBottom size='small' />}
        />
      )}
    </S.Container>
  )
}

export default Home
