import { View, Text, Alert, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Field } from "formik";
import * as Yup from 'yup';

import AppForm from "../../components/Form/AppForm";
import AppFormField from "../../components/Form/AppFormField";
import AppFormSubmitButton from "../../components/Form/AppFormSubmitButton";
import { styles } from "./styles";
import useAuthStore from "../../store/authStore";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required").label("Email"),
  password: Yup.string().required("Password is required").label("Password").min(6, "Password must be at least 6 characters"),
});

const SignIn = () => {
  const navigation = useNavigation();
  const { setAuth } = useAuthStore(); // ← Access setAuth

  const handleSubmit = async (values: any) => {
    try {
      const { email, password } = values;
      const { data } = await axios.post("http://10.0.2.2:3001/api/auth/login", { email, password });
      await setAuth(data.user, data.token);
      // @ts-ignore
      navigation.navigate("Home");
    } catch (error: any) {
      console.log("Login error:", error);
      Alert.alert("Login Failed", error?.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginFieldsContainer}>
        <Text style={styles.pageTitle}>Sign In</Text>
        <AppForm
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <View style={styles.fieldContainer}>
            <Field
              component={AppFormField}
              name="email"
              placeholder="Your email"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Field
              component={AppFormField}
              name="password"
              placeholder="Enter password"
              secureTextEntry
              type="password"
            />
          </View>
          <AppFormSubmitButton title="Sign In" />
        </AppForm>
        <Text style={styles.linkText}>
          Doesn’t have an account?
        </Text>
        <TouchableHighlight
          // @ts-ignore
          onPress={() => navigation.navigate('SignUp')}
          underlayColor={'#3b44bb'}
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            padding: 12,
            borderRadius: 8,
          }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'dark', textAlign: 'center' }}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default SignIn;
