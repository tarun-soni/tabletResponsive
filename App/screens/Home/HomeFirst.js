import React from 'react'
import { Button, FlatList, StyleSheet, View } from 'react-native'
import { cards } from '../../data'
import Card from '../../components/Card'
import { MEAL_TYPE } from '../../constants/screenNames'

const styles = StyleSheet.create({
  cardsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})

const HomeFirst = ({ navigation }) => {
  const onCardPress = title => {
    // navigation.navigate(MEAL_TYPE, {
    //   title,
    // })
    navigation.navigate('MEAL_TYPE', {
      itemId: 86,
      otherParam: 'anything you want here',
    })
  }

  return (
    <View style={styles.cardsContainer}>
      <FlatList
        data={cards}
        renderItem={({ item }) => (
          <Card cardItem={item} onCardPress={onCardPress} />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default HomeFirst
