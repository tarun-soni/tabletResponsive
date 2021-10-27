import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './screens/Home'
import Contact from './screens/Contact'
import { HOME_SCREEN, CONTACT_SCREEN } from './constants/screenNames'
import { Image, TouchableOpacity } from 'react-native'
import icons from './constants/icons'
const Main = () => {
  const Drawer = createDrawerNavigator()
  const homeOptions = ({ route }) => {
    return {
      title: route?.params?.title || 'Menu',
      headerRight: () => (
        <TouchableOpacity>
          <Image
            source={icons.bag}
            style={{ width: 20, height: 20, marginHorizontal: 10 }}
          />
        </TouchableOpacity>
      ),
    }
  }
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={HOME_SCREEN}
        component={Home}
        options={homeOptions}
      />
      <Drawer.Screen name={CONTACT_SCREEN} component={Contact} />
    </Drawer.Navigator>
  )
}

export default Main
