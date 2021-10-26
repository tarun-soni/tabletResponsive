import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FONTS, SIZES } from '../constants/theme'

const styles = StyleSheet.create({
  bg: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width * 0.85,
    height: 150,
    // height: SIZES.height * 0.2,
    borderRadius: 2,
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  img: {
    width: 65,
    height: 65,
    marginLeft: SIZES.width * 0.02,
  },
  textsContainer: {
    paddingVertical: 10,
    // width: 200,
    maxWidth: 350,
    marginHorizontal: SIZES.width * 0.05,
    // marginRight: 80,
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
