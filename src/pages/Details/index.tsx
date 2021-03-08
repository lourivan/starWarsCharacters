import React, { useEffect, useCallback, useState } from 'react'
import { ScrollView } from 'react-native'

import * as S from './style'
import { Header } from '~/components/Header'
import { getPeopleList, resultsProps } from '~/services/peoples'
import { getPlanets } from '~/services/planets'
import { getFilmsList } from '~/services/films'
import { Loader } from '~/components/Loader'
import { ErrorModal } from '~/components/ErrorModal'
import { displayName } from '~/utils/factors'

const Details: React.FC<any> = ({ route, navigation }: any) => {
  const TAG = 'details'
  const { url } = route.params
  const [details, setDetails] = useState<resultsProps>()
  const [loading, setIsloading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [homeWorld, setHomeWorld] = useState<string>()
  const [filmsTitle, setFilmsTitle] = useState<string[]>([])

  const singleItems = [
    'height',
    'mass',
    'hair_color',
    'skin_color',
    'eye_color',
    'birth_year',
    'gender',
  ]

  const init = useCallback(async () => {
    if (url) {
      setIsError(false)
      try {
        const { data } = await getPeopleList(url)
        const { films } = data
        const {
          data: { name },
        } = await getPlanets(data?.homeworld)
        setHomeWorld(name)
        setDetails(data)
        await listFilms(films)
      } catch (err) {
        if (!loading) {
          setTimeout(() => {
            setIsError(true)
          }, 500)
        }
      } finally {
        setTimeout(() => {
          setIsloading(false)
        }, 1000)
      }
    }
  }, [url])

  useEffect(() => {
    init()
  }, [])

  const listFilms = useCallback(async (films: string[]) => {
    if (films.length) {
      let result: string[] = []
      await Promise.all(
        films.map(async (item) => {
          const {
            data: { title },
          } = await getFilmsList(item)
          result.push(title)
        }),
      )
      return setFilmsTitle(result)
    }
  }, [])

  const renderItemsDetails = () => (
    <>
      {singleItems.map((item, key) => (
        <S.DescColumn key={key}>
          <S.CardParagraph>{displayName(item)}:</S.CardParagraph>
          <S.CardTitle>{details?.[item]}</S.CardTitle>
        </S.DescColumn>
      ))}
    </>
  )

  const renderFilms = () => (
    <S.DescColumn>
      <S.CardParagraph>Films:</S.CardParagraph>
      <S.CardTitle>{filmsTitle.join(', ')}</S.CardTitle>
    </S.DescColumn>
  )

  return (
    <S.Container testID={TAG}>
      {loading && <Loader />}
      {isError && <ErrorModal onRetry={init} />}
      <Header
        type='page'
        title='Characters'
        subtitle='details'
        onBack={() => navigation.goBack()}
      />
      {details && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <S.DetailContainer>
            <S.CardDetail>
              <S.CardContent>
                <S.HeaderTitle>{details?.name}</S.HeaderTitle>
                <S.Divider />
              </S.CardContent>

              <S.CardRowContent>
                <>
                  {renderItemsDetails()}
                  <S.DescColumn>
                    <S.CardParagraph>Home World:</S.CardParagraph>
                    <S.CardTitle>{homeWorld}</S.CardTitle>
                  </S.DescColumn>
                  {renderFilms()}
                </>
              </S.CardRowContent>
            </S.CardDetail>
          </S.DetailContainer>
        </ScrollView>
      )}
    </S.Container>
  )
}

export default Details
