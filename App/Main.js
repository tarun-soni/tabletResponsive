import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { AppRoutes, HOMESCREEN } from './constants/routes/AppRoutes'

const Main = () => {
  const MainStack = createNativeStackNavigator()

  return (
    <MainStack.Navigator initialRouteName={HOMESCREEN}>
      {AppRoutes.map(route => (
        <MainStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </MainStack.Navigator>
  )
}

export default Main
