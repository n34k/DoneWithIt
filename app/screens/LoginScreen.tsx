import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import * as Yup from 'yup'

import { AppForm, AppFormField, SubmitButton } from  '../components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

export default function LoginScreen({}) {
    return (
        <SafeAreaView style={styles.screen}>
            <Image 
                style={styles.logo} 
                source={require('../assets/logo-red.png')}
            />

            <AppForm
                initialValues={{ email: '', password: ''}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
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
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    screen: {
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15
    }
})