import React, { useState } from 'react'
import { Text, TextInput, View, Button } from 'react-native'

import styles from '../styles/style'

export default ({ route, navigation }) => {
    
    const [device, setDevice] = useState(route.params ? route.params : {})

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
        <View style={styles.form}>
            <Text>Nome do Cômodo</Text>
            <TextInput
                style={styles.input}
                onChangeText={(roomName) => setDevice({...device, roomName})}                
                placeholder="Informe o Nome do Cômodo"
                value={device.roomName}
            />
            <Text>Nome do Dispositivo</Text>
            <TextInput
                style={styles.input}
                onChangeText={deviceName => setDevice({...device, deviceName})}
                placeholder="Informe o Nome do Dispositivo"
                value={device.deviceName}
            />
            <Text>IP Adress</Text>
            <TextInput
                style={styles.input}
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