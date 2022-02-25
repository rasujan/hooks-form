import React from 'react';
import DatePicker from 'react-datepicker';
import {
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';

import 'react-datepicker/dist/react-datepicker.css';

const FormDatePicker = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  error,
  helperText,
  ...rest
}) => {
  return (
    <FormControl isInvalid={error}>
      <FormLabel>{label}</FormLabel>

      <DatePicker
        showPopperArrow={false}
        selected={value}
        onChange={onChange}
        maxDate={new Date()}
        customInput={<Input />}
        {...rest}
      />

      {helperText && <FormHelperText> {helperText}</FormHelperText>}
      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default FormDatePicker;
