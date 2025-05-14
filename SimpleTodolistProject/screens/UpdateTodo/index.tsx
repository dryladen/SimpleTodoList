import { View } from 'react-native'
import React from 'react'
import { Route, useNavigation } from '@react-navigation/native'
import AppForm from '../../components/Form/AppForm'
import { Field } from 'formik'
import AppFormSubmitButton from '../../components/Form/AppFormSubmitButton'
import AppFormField from '../../components/Form/AppFormField'
import * as Yup from 'yup';
import { updateTodo } from '../../services/todoServices'
import Navbar from '../../components/Navbar'

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
            <Navbar title="Update Todo" />
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