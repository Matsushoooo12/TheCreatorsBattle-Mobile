import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StackNavigator from './src/navigations/StackNavigator'
import { NativeBaseProvider } from 'native-base'
import theme from './src/theme'

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <StackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}
