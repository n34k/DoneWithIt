import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import * as Yup from 'yup'

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(100000)
        .test('is-decimal',
        'Price must have at most 2 decimal places',
        value => /^\d+(\.\d{1,2})?$/.test(String(value))).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description")
});

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3},
]

export default function ListingEditScreen({}) {
    return (
        <SafeAreaView>
            <AppForm
                initialValues={{ title: '', price: '', category: null, description: ''}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name='title'
                    maxLength={255}
                    keyboardType='default'
                    textContentType='name'
                    placeholder='Title'
                />
                <AppFormField
                    name='price'
                    icon='currency-usd'
                    keyboardType='decimal-pad'
                    placeholder='Price'
                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                />
                <AppFormField
                    name='description'
                    maxLength={255}
                    numberOfLines={3}
                    icon='book-edit'
                    placeholder='Description'
                />
                <SubmitButton title='Post'/>
            </AppForm>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
})
