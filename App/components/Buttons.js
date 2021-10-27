import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
  button: {
    // flex: 1,
    margin: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  btn: {
    // backgroundImage:
    //   'linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))',
  },
})

const Buttons = () => {
  return (
    <View>
      <TouchableOpacity>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={['#2aa6b4', '#265588', '#252f71']}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Test Button</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={['#2aa6b4', '#265588']}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Large Text Button</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={styles.btn}>
        <Text>Test</Text>
      </View>
    </View>
  )
}

export default Buttons
