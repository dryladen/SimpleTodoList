import { View, Text, SafeAreaView, TouchableHighlight } from 'react-native'
import React from 'react'
import { Route, useNavigation } from '@react-navigation/native'
import Icon from '@react-native-vector-icons/fontawesome6'

type UpdateTodoProps = {
    route: Route<string, { id: string, todo: string }>
}

const UpdateTodo = ({ route }: UpdateTodoProps) => {
    const { id, todo } = route.params;
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center', height: 'auto', padding: 8, backgroundColor: '#4D55CC' }}>
                <TouchableHighlight onPressIn={() => navigation.goBack()}
                    underlayColor={'#3b44bb'} style={{ padding: 8, paddingHorizontal: 12, borderRadius: 8 }}>
                    <Icon iconStyle='solid' name="chevron-left" size={18} color="white" />
                </TouchableHighlight>
                <Text style={{ padding: 8, fontSize: 18, fontWeight: 'bold', color: 'white' }}>UpdateTodo</Text>
            </View>
            <View>

                <Text>{id}</Text>
                <Text>{todo}</Text>
            </View>
        </View>
    )
}

export default UpdateTodo