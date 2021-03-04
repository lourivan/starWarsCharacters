import { AxiosRequestConfig } from 'axios'

export class RequestHeaderConfig {
  private requestConfig: AxiosRequestConfig

  constructor() {
    this.requestConfig = {}
  }

  static init = (): RequestHeaderConfig => new RequestHeaderConfig()

  createConfig = (): AxiosRequestConfig => this.requestConfig
}
