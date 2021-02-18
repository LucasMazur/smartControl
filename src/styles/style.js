import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    logo: {
        width: 300,
        height: 100,
        marginTop: 30,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        padding: 5,
        alignItems: "center",
        justifyContent: 'space-evenly',
        backgroundColor: "#ffffff",
    },
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
    saveButton: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        backgroundColor: '#36523CFF',
        fontSize: 15,
    },
    button: {
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#D3D3D3',
        width: 300,
        height: 80,
        margin: 15,
        borderRadius: 20,
    },
    pins: {
        margin: 15,
        width: 100,
        height: 100,
    },
    containerRoom: {
        flex: 1,
        padding: 5,
        backgroundColor: "#ffffff",
        alignItems: "center", 
    },
    title: {
        fontSize: 25,
        marginBottom: 20,
    },
    containerButtons: {
        marginTop: 10,
        flexDirection: "row",
    },
    text: {
        fontSize: 15,
        textTransform: 'uppercase',
    },
    buttonOut: {
        marginRight: 30,
    },
    buttonRooms: {
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#D3D3D3',
        width: 120,
        height: 120,
        margin: 15,
        borderRadius: 20,
    },
    pinsRooms: {
        margin: 15,
        width: 40,
        height: 40,
    },
    textRooms: {
        textTransform: 'uppercase',
    }
})