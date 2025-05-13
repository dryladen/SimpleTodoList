import { View, Text, SafeAreaView, TouchableHighlight } from 'react-native'
import React from 'react'
import { Route, useNavigation } from '@react-navigation/native'
import Icon from '@react-native-vector-icons/fontawesome6'
import AppForm from '../../components/Form/AppForm'
import { Field } from 'formik'
import AppFormSubmitButton from '../../components/Form/AppFormSubmitButton'
import AppFormField from '../../components/Form/AppFormField'
import * as Yup from 'yup';
import { updateTodo } from '../../services/todoServices'

type UpdateTodoProps = {
    route: Route<string, { id: string, todo: string }>
}

const validationSchema = Yup.object().shape({
    todo: Yup.string().required('Todo is required').label('Todo'),
});

const UpdateTodo = ({ route }: UpdateTodoProps) => {
    const { id, todo } = route.params;
    const navigation = useNavigation();
    return (
        <View>
            <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center', height: 'auto', padding: 8, backgroundColor: '#4D55CC' }}>
                <TouchableHighlight onPress={() => navigation.goBack()}
                    underlayColor={'#3b44bb'} style={{ padding: 8, paddingHorizontal: 12, borderRadius: 8 }}>
                    <Icon iconStyle='solid' name="chevron-left" size={18} color="white" />
                </TouchableHighlight>
                <Text style={{ padding: 8, fontSize: 18, fontWeight: 'bold', color: 'white' }}>Create Todo</Text>
            </View>
            <View style={{ padding: 20, backgroundColor: 'white', height: '100%' }}>
                <AppForm
                    initialValues={{ id: id, todo: todo }}
                    validationSchema={validationSchema}
                    onSubmit={(values: any) => {
                        updateTodo(values.id, values.todo).then(() => {
                            navigation.goBack();
                        });
                    }}>
                    <Field component={AppFormField} name="todo" placeholder="Todo" />
                    <AppFormSubmitButton title="Submit" />
                </AppForm>
            </View>
        </View>
    )
}

export default UpdateTodo