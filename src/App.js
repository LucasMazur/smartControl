import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './views/Home'
import AddRoom from './views/AddRoom'
import Room from './views/Room'
import { Button, Icon } from 'react-native-elements'
import wifi from 'react-native-android-wifi'

const Stack = createStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={screenOptions}>
                    <Stack.Screen 
                        name="Home"
                        component={Home}
                        options={({ navigation }) => {
                            return {
                                title: "Home",
                                headerRight: () => (
                                    <Button
                                        onPress={() => {
                                            // wifi.forceWifiUsage(true)
                                            // wifi.findAndConnect("AlumbraServer", "", (found) => {
                                            //     if (found) {
                                            //       console.log("wifi is in range");
                                            //     } else {
                                            //       console.log("wifi is not in range");
                                            //     }
                                            // });
                                            navigation.navigate("AddRoom")
                                        }}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="white" />}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen 
                        name="AddRoom"
                        component={AddRoom}
                        options={{
                            title: "Adicionar Novo dispostivo"
                        }}
                    />
                    <Stack.Screen 
                        name="Room"
                        component={Room}
                        options={{
                            title: "Cômodos"
                        }}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#36523CFF'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}