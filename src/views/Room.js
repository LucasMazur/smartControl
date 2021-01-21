import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { encode } from "react-native-base64"

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
                <Text>{device.deviceName}</Text>
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
        <View style={styles.container}>
            <Image source={{uri: props.route.params.image}} style={styles.pins} />
            <Text style={styles.title}>{props.route.params.room}</Text>
            <FlatList
                numColumns={2}
                keyExtractor={user => user._id.toString()}
                data={data}
                renderItem={getDevice}
            />
        </View>
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
        width: 100,
        height: 100,
    },
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: "#ffffff",
        alignItems: "center", 
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    }
})