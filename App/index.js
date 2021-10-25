import React from 'react'
import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native'
import Card from './components/Card'
import icons from './constants/icons'

const styles = StyleSheet.create({
  cardsContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const App = () => {
  const cards = [
    {
      id: 1,
      title: 'Breakfast',
      desc: 'All happiness depends on leisurely breakfast',
      img: icons.pasta,
      bg: '#EAEBB6',
    },
    {
      id: 2,
      title: 'Lunch',
      desc: 'All happiness depends on leisurely breakfast',
      img: icons.garlic,
      bg: '#adc793',
    },
    {
      id: 3,
      title: 'Dinner',
      desc: 'All happiness depends on leisurely breakfast',
      img: icons.tomato,
      bg: '#D3D3D3',
    },
    {
      id: 4,
      title: 'Drinks',
      desc: 'All happiness depends on leisurely breakfast',
      img: icons.onion,
      bg: '#98c1d9',
    },
  ]
  return (
    <SafeAreaView>
      <View style={styles.cardsContainer}>
        <FlatList
          data={cards}
          renderItem={({ item }) => <Card cardItem={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default App
