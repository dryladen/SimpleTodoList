import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
    }, 
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#4D55CC',
    }, 
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },

})