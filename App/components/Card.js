import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FONTS, SIZES } from '../constants/theme'

const styles = StyleSheet.create({
  bg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SIZES.width * 0.85,
    height: 180,
    borderRadius: SIZES.radius,
    marginVertical: 10,
    paddingLeft: 20,
    borderWidth: 1.5,
  },

  img: {
    width: 80,
    height: 80,
    // marginHorizontal: 20,
  },
  textsContainer: {
    // marginHorizontal: 40,
    paddingVertical: 10,
    width: 200,
  },
  title: {
    ...FONTS.h1,
    fontWeight: 'bold',
  },
  desc: {},
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
