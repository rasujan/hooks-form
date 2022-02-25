import React from 'react';

import {
  FormLabel,
  FormControl,
  FormHelperText,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

const FormInput = props => {
  const {
    label,
    name,
    value,
    onChange,
    placeholder,
    error,
    helperText,
    ...rest
  } = props;

  return (
    <FormControl isInvalid={error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <Input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        placeholder={placeholder}
        {...rest}
      />

      {helperText && <FormHelperText> {helperText}</FormHelperText>}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormInput;
