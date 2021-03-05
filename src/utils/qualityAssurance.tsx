import { Platform } from 'react-native'

interface ItestID {
  accessible?: boolean
  testID: string
  accessibilityLabel?: string
}
const testID = (testID: string): ItestID =>
  Platform.OS === 'android'
    ? {
        testID,
        accessible: true,
        accessibilityLabel: testID,
      }
    : {
        testID,
        accessible: false,
      }

type componentType =
  | 'View'
  | 'Lottie'
  | 'ScrollView'
  | 'Modal'
  | 'Image'
  | 'Text'
  | 'TouchableOpacity'
  | 'SafeAreaView'

export const assignTestId = (
  componentType: componentType,
  componentId: string,
): ItestID => {
  const id = `${componentType}_${componentId}`
  return testID(id)
}
export const mockTestID = (
  componentType: componentType,
  componentId: string,
): ItestID => assignTestId(componentType, componentId)
