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
        height: 70,
    },
    headerIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    modalText: {
        fontSize: 16,
        color: 'white',
        marginTop: 10,
    },
    backButton: {
        padding: 8, paddingHorizontal: 12, borderRadius: 8
    },
});