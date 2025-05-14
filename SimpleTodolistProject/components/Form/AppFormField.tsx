import React from 'react';
import { Text, TextInput, View } from 'react-native';

const AppFormField = (props: any) => {
    const {
        placeholder,
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        ...inputProps
    } = props;

    const hasError = errors[name] && touched[name];
    return (
        <View style={{ gap: 8 }}>
            <Text style={{ textTransform: 'capitalize', fontWeight: '500', color: hasError ? 'red' : 'gray' }}>{name}</Text>
            <TextInput
                style={{
                    height: 45,
                    width: '100%',
                    backgroundColor: 'white',
                    borderColor: hasError ? 'red' : 'gray',
                    borderWidth: 1,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                }}
                placeholder={placeholder}
                onChangeText={text => onChange(name)(text)}
                onBlur={() => {
                    setFieldTouched(name);
                    onBlur(name);
                }}
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                {...inputProps}
            />
            {hasError && <Text style={{ color: 'red' }}>{errors[name]}</Text>}
        </View>
    );
};

export default AppFormField;