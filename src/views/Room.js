import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Button } from 'react-native';

import styles from '../styles/style'

export default props => {

    const [data, setData] = useState ('')

    useEffect(() => {
        fetch('http://172.16.30.53:3001/api/userDevices/get', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roomName: props.route.params.room
            })
        })
        .then((res) => res.json())
        .then((json) => {
            setData(json)
        })
    }, [])

    function getDevice ({item: device}) {
        return (
            <TouchableOpacity style={styles.button} onPress={() => {turnLight(device)}}>
                <Text style={styles.text} >{device.deviceName}</Text>
            </TouchableOpacity>
        )
    }

    function turnLight(device) {
        fetch(`http://${device.ip}/${device.out}`, {
            method: 'POST',
            body: JSON.stringify({
                saida: "01"
            })
        })
    }

    return (
        <View style={styles.containerRoom}>
            <Image source={{uri: props.route.params.image}} style={styles.pins} />
            <Text style={styles.title}>{props.route.params.room}</Text>
            <FlatList
                numColumns={1}
                keyExtractor={user => user._id.toString()}
                data={data}
                renderItem={getDevice}
            />
        </View>
    )
}