import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    updateButton: {
        padding: 8,
        backgroundColor: '#3B82F6', // Equivalent to bg-blue-500
        borderRadius: 8, // Equivalent to rounded-lg
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex', 
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#4D55CC',
    },
    
    addButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        padding: 20,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        paddingHorizontal: 22,
        backgroundColor: '#4D55CC', // Equivalent to bg-blue-500
        borderRadius: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    newTodoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        paddingVertical: 20,
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#4D55CC',
    },
    newTodoInput: {
        flex: 1,
        paddingHorizontal: 16,
        color: 'black',
        backgroundColor: '#E5E7EB', // Equivalent to bg-gray-200
        borderRadius: 12, // Equivalent to rounded-xl
    },
    item: {
        padding: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#4D55CC',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    task: {
        padding: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#4D55CC',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    });