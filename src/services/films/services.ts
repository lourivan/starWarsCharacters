import axios, { AxiosPromise } from 'axios'

import { filmsPropsReponse } from './types'
import { RequestHeaderConfig } from '~/services/interceptor/RequestHeaderConfig'

export const getFilmsList = (url: string): AxiosPromise<filmsPropsReponse> => {
  const config = RequestHeaderConfig.init().createConfig()
  return axios.get(url, config)
}
