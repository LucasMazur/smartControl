import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, Button, TouchableOpacity } from 'react-native'
import wifi from 'react-native-android-wifi';
import ConnectWifi from '../Components/ConnectWifi'

import styles from '../styles/style'

export default ({ route, navigation }) => {

    const [device, setDevice] = useState(route.params ? route.params : {})
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        let timer = setInterval(() => {
            setLoading(false)
        }, 5000)
    }, [])

    function submitData() {
        fetch('http://172.16.30.53:3001/api/userDevices/save', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roomName: device.roomName,
                deviceName: device.deviceName,
                ip: device.ip,
                out: device.out
            })
        })
  
        fetch('http://172.16.30.53:3001/api/userRooms/save', {
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ConnectWifi visible={loading}>
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
                  <Text>Qual a saída?</Text>
                  <TextInput
                      style={styles.input}
                      onChangeText={out => setDevice({...device, out})}
                      placeholder="Informe a qual a saída"
                      value={device.out}
                  />
                  <TouchableOpacity
                      style={styles.saveButton}
                      onPress={submitData}
                  >
                      <Text>salvar</Text>
                  </TouchableOpacity>
                </View>
            </ConnectWifi>
        </View>
    )
}