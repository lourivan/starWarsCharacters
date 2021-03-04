/**
 * @format
 */

import { AppRegistry, NativeModules } from 'react-native'
import { App } from './src'
import { name as appName } from './app.json'

if (__DEV__) {
  import('./scripts/native-debugger')
  global.NativeModules = NativeModules
}

AppRegistry.registerComponent(appName, () => App)
