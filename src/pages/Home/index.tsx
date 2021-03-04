import React, { useEffect, useCallback, useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '~/components/Header'
import { ListItem } from '~/components/ListItem'
import {
  getPeopleList,
  peoplePropsReponse,
  resultsProps,
} from '~/services/people'
import { Loader } from '~/components/Loader'
import * as S from './style'

const Home: React.FC = ({ navigation }: any) => {
  const [isLoading, setIsloading] = useState<boolean>(true)
  const [data, setData] = useState<peoplePropsReponse>()
  const [listPeople, setListPeople] = useState<resultsProps[]>([])

  const getPeople = useCallback(async (page) => {
    try {
      console.log('loading data')
      if (typeof page == 'string') {
        const { data } = await getPeopleList(page)
        const { results } = data
        setData(data)
        setListPeople((list) => [...list, ...results])
      }
    } catch (err) {
    } finally {
      setTimeout(() => {
        setIsloading(false)
      }, 500)
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
    <S.Container>
      <Header type='default' />
      {isLoading && <Loader />}
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
