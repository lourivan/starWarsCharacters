import axios, { AxiosPromise } from 'axios'
import { API_SWAPI } from '@env'

import { peoplesPropsReponse, resultsProps } from './types'
import { RequestHeaderConfig } from '~/services/interceptor/RequestHeaderConfig'

export const getPeoplesList = (
  url: string = '',
): AxiosPromise<peoplesPropsReponse> => {
  const config = RequestHeaderConfig.init().createConfig()
  const path = url.length ? url : `${API_SWAPI}/people/`
  return axios.get(path, config)
}

export const getPeopleList = (url: string): AxiosPromise<resultsProps> => {
  const config = RequestHeaderConfig.init().createConfig()
  return axios.get(url, config)
}
