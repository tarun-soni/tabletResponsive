import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Card from '../components/Card'
import { cards } from '../data'

const styles = StyleSheet.create({
  cardsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})

const HomeScreen = () => {
  return (
    <View style={styles.cardsContainer}>
      <FlatList
        data={cards}
        renderItem={({ item }) => <Card cardItem={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default HomeScreen
