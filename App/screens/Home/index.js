import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { HomeRoutes } from '../../constants/routes/AppRoutes'
import { HOME_FIRST } from '../../constants/screenNames'

const Home = () => {
  const MainStack = createNativeStackNavigator()

  return (
    <MainStack.Navigator initialRouteName={HOME_FIRST}>
      {HomeRoutes.map(route => (
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
export default Home
