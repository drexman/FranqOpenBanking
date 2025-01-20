import React, { use, useEffect, useState } from 'react';
import { useField } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from "@chakra-ui/react"

interface InputFieldProps {
    label: string,
    name: string,
    type: string,
    placeholder?: string
}

const InputField = (props: InputFieldProps) => {
    const [field, meta] = useField(props);

    return (
        <FormControl>
            <FormLabel>{props.label}</FormLabel>
            <Input {...field} {...props}></Input>
            { meta.touched && meta.error ? (
                <span style={{ color: 'red', fontFamily: 'sans-serif', fontSize: '14px'}}>{meta.error}</span>
            ): null}
        </FormControl>
    )
}

export default InputField;