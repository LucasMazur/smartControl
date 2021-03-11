import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'

import styles from '../styles/style'

export default props => {

    const [data, setData] = useState ('')
    const [slider, setSlider] = useState ('')

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
            <>
                <TouchableOpacity style={styles.button} onPress={() => {turnLight(device)}}>
                    <Text style={styles.text} >{device.deviceName}</Text>
                </TouchableOpacity>
                <Slider
                    minimumValue={0}
                    maximumValue={99}
                    onSlidingComplete={(value) => {
                        setSlider(value)
                        console.log(value)
                    }} 
                />
            </>
        )
    }

    function turnLight(device) {
        fetch(`http://${device.ip}/turnOut?out=${device.out}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                out: device.out
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