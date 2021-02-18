import React, { useEffect } from 'react';
import { Image, SafeAreaView, Button, PermissionsAndroid } from 'react-native'
import GetRooms from '../Components/getRooms'
import wifi from 'react-native-android-wifi';

import styles from '../styles/style'

import logo from '../img/logo.png'

export default props => {

    useEffect(() => {
        wifi.setEnabled(true)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} resizeMode="contain" />
            <GetRooms navigation={props.navigation} />
        </SafeAreaView>
    )
}