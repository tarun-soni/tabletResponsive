import React from 'react'

import HomeFirst from '../../screens/Home/HomeFirst'
import MealType from '../../screens/Home/MealType'
import { HOME_FIRST, MEAL_TYPE } from '../screenNames'

const HomeRoutes = [
  {
    name: HOME_FIRST,
    component: HomeFirst,
    options: {
      headerShown: false,
    },
  },
  {
    name: MEAL_TYPE,
    component: MealType,
    options: {
      headerShown: false,
    },
  },
]

export { HomeRoutes }
