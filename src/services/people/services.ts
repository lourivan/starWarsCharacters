import axios, { AxiosPromise } from 'axios'
import { API_SWAPI } from '@env'

import { peoplePropsReponse } from './types'
import { RequestHeaderConfig } from '~/services/interceptor/RequestHeaderConfig'

export const getPeopleList = (
  url: string = '',
): AxiosPromise<peoplePropsReponse> => {
  const config = RequestHeaderConfig.init().createConfig()
  const path = url.length ? url : `${API_SWAPI}/people/`
  return axios.get(path, config)
}
