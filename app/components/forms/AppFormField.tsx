import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import { AppFormFieldProps } from '../../types/propTypes';
import { LoginFormValues } from '../../types/dataTypes';

export default function AppFormField({ name, ...otherProps }: AppFormFieldProps) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext<LoginFormValues>()

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

