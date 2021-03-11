import React, { useState, useEffect } from 'react'
import { Text, TextInput, FlatList, View, Button, TouchableOpacity } from 'react-native'
import wifi from 'react-native-android-wifi';
import ConnectWifi from '../services/espConnections'

import styles from '../styles/style'

export default ({ route, navigation }) => {

    const [device, setDevice] = useState(route.params ? route.params : {})
    const [ssid, setSsid] = useState('')
    const [pass, setPass] = useState('')
    const [connection, setConnection] = useState(0)
    const[loading, setLoading] = useState(true)

    useEffect(() => {
        let timer = setInterval(() => {
            setLoading(false)
        }, 5000)
    }, [])

    function timerSet() {
        let timer = setInterval(() => {
            setLoading(false)
        }, 10000)        
    }

    function submitWifi() {
        fetch(`http://192.168.4.1/wifisave?s=${ssid}&p=${pass}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            setLoading(true)
            setConnection(1)
            timerSet()
        })
    }

    function espConectou() {
        fetch(`http://192.168.4.1/r`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            setLoading(true)
            setConnection(2)
            timerSet()
        })        
    }

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

    if (connection === 0){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ConnectWifi visible={loading}>
                    <View style={styles.form}>
                      <Text>SSID</Text>
                      <TextInput
                          style={styles.input}
                          onChangeText={ssid => setSsid(ssid)}                
                          placeholder="Informe a rede que deseja conectar"
                      />
                      <Text>SENHA</Text>
                      <TextInput
                          style={styles.input}
                          onChangeText={pass => setPass(pass)}
                          placeholder="Informe o Nome do Dispositivo"
                      />
                      <TouchableOpacity
                          style={styles.saveButton}
                          onPress={submitWifi}
                      >
                          <Text>ENVIAR</Text>
                      </TouchableOpacity>
                    </View>
                </ConnectWifi>
            </View>
        )
    } else if (connection === 1) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ConnectWifi visible={loading}>
                    <Text>Verifique se seu dispositivo acendeu o Led</Text>
                    <Text>Caso sim clique em conectou!!</Text>
                    <Text>Caso não clique em não conectou e verifique se enviou as informções corretas</Text>
                    <Button title="CONECTOU" onPress={espConectou()} />
                    <Button title="NÃO CONECTOU" onPress={() => {
                        setLoading(true)
                        setConnection(0)
                        timerSet()
                    }} />
                </ConnectWifi>
            </View>
        )
    } else {
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
}