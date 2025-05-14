import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Field } from 'formik';
import * as Yup from 'yup';
import AppForm from '../../components/Form/AppForm';
import AppFormSubmitButton from '../../components/Form/AppFormSubmitButton';
import AppFormField from '../../components/Form/AppFormField';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from '@react-native-vector-icons/fontawesome6';
import { createTodo } from '../../services/todoServices';
import Navbar from '../../components/Navbar';

const validationSchema = Yup.object().shape({
    todo: Yup.string().required('Todo is required').label('Todo'),
});

const CreateTodo = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Navbar title="Create Todo" />
            <View style={styles.formContainer}>
                <AppForm
                    initialValues={{ todo: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values: any) => {
                        createTodo(values.todo).then(() => {
                            navigation.goBack();
                        });
                    }}
                >
                    <Field component={AppFormField} name="todo" placeholder="Todo" />
                    <AppFormSubmitButton title="Submit" />
                </AppForm>
            </View>
        </View>
    );
};

export default CreateTodo;
