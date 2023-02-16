import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#e8f5e9',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        margin: 10,
        flexDirection: 'row',
        borderBottomLeftRadius:11,
        borderTopLeftRadius:11

    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10
    },
    body_container: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-between',


    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
        fontStyle: 'italic'
    }
});