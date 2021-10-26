import React from 'react'

import { Image } from 'react-native'
import HomeScreen from '../../screens/HomeScreen'
import icons from '../icons'

export const HOMESCREEN = 'HOMESCREEN'

const AppRoutes = [
  {
    name: HOMESCREEN,
    component: HomeScreen,
    options: {
      headerTitle: 'Menu',
      headerRight: () => (
        <Image source={icons.bag} style={{ width: 20, height: 20 }} />
      ),
      // headerLeft: () => (
      //   <Image source={icons.} style={{ width: 20, height: 20 }} />
      // ),
    },
  },
]

export { AppRoutes }
