import axios, { AxiosPromise } from 'axios'

import { planetsPropsReponse } from './types'
import { RequestHeaderConfig } from '~/services/interceptor/RequestHeaderConfig'

export const getPlanets = (url: string): AxiosPromise<planetsPropsReponse> => {
  const config = RequestHeaderConfig.init().createConfig()
  return axios.get(url, config)
}
