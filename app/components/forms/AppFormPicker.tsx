import React from 'react';
import { useFormikContext } from 'formik';

import { ListingEditFormValues } from '../../types/dataTypes';
import ErrorMessage from './ErrorMessage';
import Picker from '../Picker';

export default function AppFormPicker({ items, name, placeholder }) {
    const { setFieldValue, errors, touched, values } = useFormikContext<ListingEditFormValues>()
    return (
        <>
            <Picker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>

    );
}

