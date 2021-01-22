import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Button } from 'react-native';

import styles from '../styles/style'

export default props => {

    const [data, setData] = useState ('')

    useEffect(() => {
        fetch('http://172.16.30.171:3001/api/userDevices/get', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                room: props.route.params.room
            })
        })
        .then((res) => res.json())
        .then((json) => {
            setData(json)
        })
    }, [])

    function getDevice ({item: device}) {
        return (
            <TouchableOpacity style={styles.button} onPress={() => {turnLight()}}>
                <Text style={styles.text} >{device.deviceName}</Text>
                <View style={styles.containerButtons}>
                    <Button color="#000" style={styles.buttonOut} title="saída 1"/>
                    <Button color="#000" style={styles.buttonOut} title="saída 2"/>
                    <Button color="#000" style={styles.buttonOut} title="saída 3"/>
                </View>
            </TouchableOpacity>
        )
    }

    function turnLight() {
        fetch('http://172.16.30.201/', {
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