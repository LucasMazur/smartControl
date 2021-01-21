import React from 'react'
import { View, Text, FlatList, Alert, Image, StyleSheet, SafeAreaView } from 'react-native'
import { Avatar, Button, Divider, Icon, ListItem } from 'react-native-elements'
import GetRooms from '../Components/getRooms'

import logo from '../img/logo.png'

export default props => {

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} resizeMode="contain" />
            <GetRooms navigation={props.navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 100,
        marginTop: 30,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        padding: 5,
        alignItems: "center",
        justifyContent: 'space-evenly',
        backgroundColor: "#ffffff",
    },
})