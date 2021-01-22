import React, { useState, useEffect } from 'react';
import { Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements'

export default props => {

    const [data, setData] = useState ('')

    useEffect(() => {
        fetch('http://172.16.30.171:3001/api/userRooms/get')
        .then((res) => res.json())
        .then((json) => {
            setData(json)
        })
    }, [data])

    function getDevice ({item: device}) {
        return (
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Room", {room: device.roomName, image: device.imageUrl})}>
                <Avatar style={styles.pins} source={{uri: device.imageUrl}} />
                <Text style={styles.text}>{device.roomName}</Text>
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

const styles = StyleSheet.create({ 
    button: {
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#D3D3D3',
        width: 120,
        height: 120,
        margin: 15,
        borderRadius: 20,
    },
    pins: {
        margin: 15,
        width: 40,
        height: 40,
    },
    text: {
        textTransform: 'uppercase',
    }
})