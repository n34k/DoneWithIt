import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import * as Yup from 'yup'

import { AppForm, AppFormField, SubmitButton } from  '../components/forms'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export default function RegisterScreen({}) {
    return (
        <SafeAreaView>
            <AppForm
                initialValues={{ name: '', email: '', password: ''}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name='name'
                    autoCorrect={false}
                    autoCapitalize='none'
                    icon='account'
                    textContentType='name'
                    placeholder='Name'
                />
                <AppFormField
                    name='email'
                    autoCorrect={false}
                    autoCapitalize='none'
                    icon='email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    placeholder='Email'
                />
                <AppFormField
                    name='password'
                    autoCorrect={false}
                    autoCapitalize='none'
                    icon='lock'
                    secureTextEntry
                    textContentType='password'
                    placeholder='Password'
                />
                <SubmitButton title='Login'/>
            </AppForm>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
})