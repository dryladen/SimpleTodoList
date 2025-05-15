import { View, Text } from 'react-native'
import React from 'react'
import Navbar from '../../components/Navbar'
import useAuthStore from '../../store/authStore'
import AppForm from '../../components/Form/AppForm'
import { Field } from 'formik'
import AppFormField from '../../components/Form/AppFormField'
import * as Yup from 'yup';
import { styles } from './styles'
import AppFormSubmitButton from '../../components/Form/AppFormSubmitButton'

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").label("Name"),
    email: Yup.string().email().required("Email is required").label("Email"),
    Role: Yup.string().required("Role is required").label("Role"),
});

const Profile = () => {
    const { user } = useAuthStore();
    const handleSubmit = async (values: any) => {

    };
    return (
        <View>
            <Navbar title="Profile" />
            <View style={styles.loginFieldsContainer}>
                <AppForm
                    initialValues={{ name: user?.name, email: user?.email, role: user?.role }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <View style={styles.fieldContainer}>
                        <Field
                            component={AppFormField}
                            name="name"
                            placeholder="Your name"

                        />
                        <Field
                            component={AppFormField}
                            name="email"
                            placeholder="Your email"
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                        <Field
                            component={AppFormField}
                            name="role"
                            placeholder="Enter new role"
                        />
                    </View>
                    <AppFormSubmitButton title="Update" />
                </AppForm>
            </View>
        </View>
    )
}

export default Profile