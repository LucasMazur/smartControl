import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './views/Home'
import AddRoom from './views/AddRoom'
import { Button, Icon } from 'react-native-elements'

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
                                        onPress={() => navigation.navigate("AddRoom")}
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