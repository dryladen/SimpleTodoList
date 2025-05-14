import { View, Text, Modal, TouchableHighlight } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from '@react-native-vector-icons/fontawesome6'
import { useNavigation } from '@react-navigation/native'
import useAuthStore from '../../store/authStore'

const Navbar = ({ title, isMain = false }: { title: string, isMain?: boolean }) => {
    const navigation = useNavigation();
    const { logout } = useAuthStore();
    const handleLogout = async () => {
        try {
            await logout();
            // @ts-ignore
            navigation.navigate('SignIn');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerIconContainer}>
                {!isMain && (
                    <TouchableHighlight
                        onPress={() => navigation.goBack()}
                        underlayColor="#3b44bb"
                        style={styles.backButton}
                    >
                        <Icon iconStyle="solid" name="chevron-left" size={18} color="white" />
                    </TouchableHighlight>)
                }
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 10 }} >
                <TouchableHighlight
                    // @ts-ignore
                    onPress={() => navigation.navigate('Profile')}
                    underlayColor={'#3b44bb'} style={{ borderRadius: 8 }} >
                    <View style={{ padding: 8, borderRadius: 8 }} >
                        <Icon name="user" iconStyle="solid" color={'white'} size={16} />
                    </View>
                </TouchableHighlight>
                < TouchableHighlight
                    onPress={() => { handleLogout() }}
                    underlayColor={'#3b44bb'}
                    style={{ borderRadius: 8 }} >
                    <View style={{ padding: 8, borderRadius: 8 }} >
                        <Icon
                            name="right-from-bracket"
                            iconStyle="solid"
                            color={'white'}
                            size={16}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        </View >
    )
}

export default Navbar