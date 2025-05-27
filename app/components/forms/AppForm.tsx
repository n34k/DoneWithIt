import React from 'react';
import { Formik } from 'formik';
import { AppFormProps } from '../../types/propTypes';


export default function AppForm({ initialValues, onSubmit, validationSchema, children }:AppFormProps) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}
        </Formik>
    );
}
