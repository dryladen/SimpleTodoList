import React from 'react';
import { Button, Text, TouchableHighlight, View } from 'react-native';
import { useFormikContext } from 'formik';

interface AppFormSubmitButtonProps {
    title: string;
}

const AppFormSubmitButton = ({ title }: AppFormSubmitButtonProps) => {
    const { handleSubmit, isValid } = useFormikContext();
    return <View>
        <TouchableHighlight
            onPress={() => handleSubmit()}
            disabled={!isValid}
            underlayColor={'#3b44bb'}
            style={{
                backgroundColor: '#4D55CC',
                padding: 12,
                borderRadius: 8,
                marginTop: 20,
                opacity: isValid ? 1 : 0.5,
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' , textAlign: 'center' }}>{title}</Text>
        </TouchableHighlight>
    </View>
};

export default AppFormSubmitButton;