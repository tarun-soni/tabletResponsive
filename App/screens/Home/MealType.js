import React from 'react'
import { Button, Text, View } from 'react-native'

const MealType = ({ navigation }) => {
  return (
    <View>
      <Button title="go back" onPress={() => navigation.pop()} />
      <Text>Meal type screen</Text>
    </View>
  )
}

export default MealType
