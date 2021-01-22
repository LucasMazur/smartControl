import React from 'react'
import { Image, SafeAreaView } from 'react-native'
import GetRooms from '../Components/getRooms'

import styles from '../styles/style'

import logo from '../img/logo.png'

export default props => {

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} resizeMode="contain" />
            <GetRooms navigation={props.navigation} />
        </SafeAreaView>
    )
}