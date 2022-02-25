import React from 'react';

import {
  FormLabel,
  FormControl,
  FormHelperText,
  Select,
  FormErrorMessage,
} from '@chakra-ui/react';

const FormSelect = props => {
  const {
    label,
    name,
    items,
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

      <Select
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        placeholder={placeholder}
        {...rest}
      >
        {items.length &&
          items.map(item => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
      </Select>

      {helperText && <FormHelperText> {helperText}</FormHelperText>}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormSelect;
