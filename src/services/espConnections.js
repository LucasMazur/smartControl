import React, { useState, useEffect } from 'react'
import { Text, View, Animated } from 'react-native'
import wifi from 'react-native-android-wifi';

import styles from '../styles/style'

export default ({ visible, children }) => {

  const animatedWidth = new Animated.Value(30)
  const animatedHeight = new Animated.Value(30)
  const [wValue, setwValue] = useState(300)
  const [hValue, sethValue] = useState(500)

  useEffect(() => {
    animatedCicle()

    return () => animatedCicle()
  }, [])

  const animatedCicle = () => {
    animatedWidth.setValue(30)
    animatedHeight.setValue(30)

    Animated.sequence([
      Animated.timing(
        animatedWidth,
        {
          toValue: wValue,
          duration: 2000,
          useNativeDriver: false
        }
      ),
      Animated.timing(
        animatedHeight,
        {
          toValue: hValue,
          duration: 2000,
          useNativeDriver: false
        }
      )
    ]).start(() => {
      setTimeout(() => {
        animatedCicle()
      }, 200)
    })
  }

  function testeConnection() {
    wifi.isEnabled((isEnabled) => {
      if (isEnabled) {
        setConectado(1)
      } else {
        setConectado(0)
      }
    })

    if (conectado === 1) {
      return <Text>CONECTADO</Text>
    } else {
      return <Text>DESCONECTADO</Text>
    }
  }

  if(visible) {
    return (    
      <Animated.View style={{ height: animatedHeight, width: animatedWidth, backgroundColor: '#555' }}>      
      </Animated.View>
    )
  }
  return (
    <>
      {children}
    </>
  )
}