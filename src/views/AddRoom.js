import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'

export default ({ route, navigation }) => {
    
    const [device, setDevice] = useState(route.params ? route.params : {})

    // const [deviceName, setDeviceName] = useState('')
    // const [roomName, setRoomName] = useState('')
    // const [ip, setIp] = useState('')

    function submitData() {
        // fetch('http://172.16.30.171:3001/api/userDevices/save', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         roomName: device.roomName,
        //         deviceName: device.deviceName,
        //         ip: device.ip
        //     })
        // })

        fetch('http://172.16.30.171:3001/api/userRooms/save', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roomName: device.roomName
            })
        })
    }

    return (
        <View style={style.form}>
            <Text>Nome do Cômodo</Text>
            <TextInput
                style={style.input}
                onChangeText={(roomName) => setDevice({...device, roomName})}                
                placeholder="Informe o Nome do Cômodo"
                value={device.roomName}
            />
            <Text>Nome do Dispositivo</Text>
            <TextInput
                style={style.input}
                onChangeText={deviceName => setDevice({...device, deviceName})}
                placeholder="Informe o Nome do Dispositivo"
                value={device.deviceName}
            />
            <Text>IP Adress</Text>
            <TextInput
                style={style.input}
                onChangeText={ip => setDevice({...device, ip})}
                placeholder="Informe o endreço de Ip"
                value={device.ip}
            />
            <Button
                title="salvar"
                onPress={submitData}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    }
})