import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FONTS, SIZES } from '../constants/theme'

const styles = StyleSheet.create({
  bg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SIZES.width * 0.85,
    height: 150,
    borderRadius: 2,
    marginVertical: 15,
    paddingLeft: 20,
  },

  img: {
    width: 80,
    height: 80,
  },
  textsContainer: {
    paddingVertical: 10,
    width: 200,
    marginRight: 10,
  },
  title: {
    ...FONTS.h1,
    fontWeight: 'bold',
  },
  desc: {
    ...FONTS.body3,
  },
})
const Card = ({ cardItem }) => {
  return (
    <View style={[styles.bg, { backgroundColor: cardItem.bg }]}>
      <Image style={styles.img} source={{ uri: cardItem.img }} />
      <View style={styles.textsContainer}>
        <Text style={styles.title}>{cardItem.title}</Text>

        <Text style={styles.desc}>{cardItem.desc}</Text>
      </View>
    </View>
  )
}
export default Card
