import React, { useState, useEffect } from 'react'
import { Text, TextInput, FlatList, View, Button, TouchableOpacity } from 'react-native'
import wifi from 'react-native-android-wifi';
import ConnectWifi from '../Components/ConnectWifi'

import styles from '../styles/style'

export default ({ route, navigation }) => {

    const [ssid, setSsid] = useState('')
    const [pass, setPass] = useState('')
    const [availableWifi, setAvailableWifi] = useState('')
    const[loading, setLoading] = useState(true)

    useEffect(() => {

        // wifi.loadWifiList((wifiStringList) => {
        //     var wifiArray = JSON.parse(wifiStringList);
        //       console.log(wifiArray);
        //       setAvailableWifi(wifiArray)
        // },
        // (error) => {
        //     console.log(error);
        // }
        // )


        let timer = setInterval(() => {
            setLoading(false)
        }, 5000)
    }, [])

    function submitWifi() {
        fetch(`http://192.168.4.1/wifisave?s=${ssid}&p=${pass}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response);
        })
    }

    // function wifiList({ item: wifi }) {
    //     return (
    //         <Text > {wifi.SSID} </Text>
    //     )
    // }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <View>
                <FlatList
                    numColumns={1}
                    keyExtractor={user => user.timestamp}
                    data={availableWifi}
                    renderItem={wifiList}
                />
            </View> */}
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
}