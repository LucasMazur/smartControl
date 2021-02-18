import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements'

import styles from '../styles/style'

export default props => {

    const [data, setData] = useState ('')

    useEffect(() => {
        fetch('http://172.16.30.53:3001/api/userRooms/get')
        .then((res) => res.json())
        .then((json) => {
            setData(json)
        })
    }, [])

    function getDevice ({item: device}) {
        return (
            <TouchableOpacity style={styles.buttonRooms} onPress={() => props.navigation.navigate("Room", {room: device.roomName, image: device.imageUrl})}>
                <Avatar style={styles.pinsRooms} source={{uri: device.imageUrl}} />
                <Text style={styles.textRooms}>{device.roomName}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            numColumns={2}
            keyExtractor={user => user._id.toString()}
            data={data}
            renderItem={getDevice}
        />
    )
}