import { useForm, Controller } from 'react-hook-form';
import { Button } from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormInput, FormSelect, FormDatePicker } from 'components/molecules';
import { genderList } from 'Constants/utils';

const PersonalDetailForm = () => {
  const schema = yup
    .object({
      firstName: yup.string().required('First Name Field is required.'),
      lastName: yup.string().required('Last Name Field is required.'),
      email: yup.string().nullable().email(),
      dob: yup
        .date()
        .min(new Date(2010, 0, 1))
        .required('Gender Field is required.'),
      gender: yup.string().required('Gender Field is required.'),
    })
    .required();

  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = values => {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 1000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        render={({ field, fieldState }) => {
          return (
            <FormInput
              {...field}
              {...fieldState}
              error={fieldState.error}
              label={'First Name'}
              placeholder={'Enter Your First Name'}
            />
          );
        }}
      />

      <Controller
        name="lastName"
        control={control}
        render={({ field, fieldState }) => {
          return (
            <FormInput
              {...field}
              {...fieldState}
              error={fieldState.error}
              label={'Last Name'}
              placeholder={'Enter Your Last Name'}
            />
          );
        }}
      />

      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => {
          return (
            <FormInput
              {...field}
              {...fieldState}
              error={fieldState.error}
              label={'Email'}
              placeholder={'Enter Your Email'}
            />
          );
        }}
      />

      <Controller
        name="gender"
        control={control}
        render={({ field, fieldState }) => {
          return (
            <FormSelect
              {...field}
              {...fieldState}
              error={fieldState.error}
              label={'Gender'}
              items={genderList}
              placeholder={'Select your gender.'}
            />
          );
        }}
      />

      <Controller
        name="dob"
        control={control}
        render={({ field, fieldState }) => {
          return (
            <FormDatePicker
              {...field}
              {...fieldState}
              error={fieldState.error}
              label={'Date of Birth'}
              items={genderList}
              placeholder={'Select your date of birth.'}
            />
          );
        }}
      />

      <Button
        mt={4}
        colorScheme="teal"
        isLoading={formState.isSubmitting}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default PersonalDetailForm;
