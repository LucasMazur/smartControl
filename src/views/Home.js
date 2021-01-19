import React from 'react'
import { View, Text, FlatList, Alert, Image, StyleSheet, SafeAreaView } from 'react-native'
import { Avatar, Button, Divider, Icon, ListItem } from 'react-native-elements'
import GetRooms from '../Components/getRooms'

import logo from '../img/logo.png'

export default props => {
    
    return (
        <SafeAreaView>
           <Text>
               <Image style={styles.logo} source={logo} resizeMode="contain" />
            </Text>
            <GetRooms />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 100,
    },
})