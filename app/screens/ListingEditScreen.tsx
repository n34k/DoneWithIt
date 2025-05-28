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
    { label: "Furniture", icon: "floor-lamp", color: "#fc5c65", value: 1 },
    { label: "Clothing", icon: "car", color: "#fd9644",  value: 2 },
    { label: "Camera", icon: "camera", color: "#fed330",  value: 3},
    { label: "Games", icon: "cards",  color: "#26de81", value: 4},
    { label: "Clothing", icon: "shoe-heel",  color: "#2bcbba", value: 5},
    { label: "Sports", icon: "basketball",  color: "#45aaf2", value: 6},
    { label: "Movies & Music", icon: "headphones",  color: "#4b7bec", value: 7},
    { label: "Books", icon: "book", color: "purple", value: 8}
]

export default function ListingEditScreen({}) {
    return (
        <SafeAreaView style={styles.screen}>
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
                    width={150}
                    icon='currency-usd'
                    keyboardType='decimal-pad'
                    placeholder='Price'
                />
                <AppFormPicker
                    items={categories}
                    width={225}
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
    screen: {
        margin: 7.5
    }
})
