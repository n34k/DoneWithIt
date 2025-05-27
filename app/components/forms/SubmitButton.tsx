import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import BigButton from '../BigButton';
import colors from '../../config/colors';
import { SubmitButtonProps } from '../../types/propTypes';

export default function SubmitButton({ title }:SubmitButtonProps) {
    const { handleSubmit } = useFormikContext();
    return (
        <BigButton 
            title={title} 
            onPress={handleSubmit}
            color={colors.primary}    
        />
    );
}

const styles = StyleSheet.create({
    
})
