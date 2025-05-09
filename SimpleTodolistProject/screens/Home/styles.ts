import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    updateButton: {
        padding: 8,
        backgroundColor: '#3B82F6', // Equivalent to bg-blue-500
        borderRadius: 8, // Equivalent to rounded-lg
    },
    headerContainer: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#4D55CC',
    },
    
    addButton: {
        padding: 8,
        paddingHorizontal: 12,
        backgroundColor: '#4D55CC',
        borderRadius: 12,
        flex: 1,
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
    flexRow: {
        flexDirection: 'row',
    },
    flex1: {
        flex: 1,
    },
    px4: {
        paddingHorizontal: 16, // Equivalent to px-4
    },
    p2: {
        padding: 8, // Equivalent to p-2
    },
    gap2: {
        gap: 8, // Equivalent to gap-2
    },
});