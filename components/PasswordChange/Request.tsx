import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';

import { auth } from '@/utils/nhost';

interface Email {
  email: string;
}

const Request: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const toast = useToast();

  const onSubmit = async (values: Email) => {
    const { email } = values;
    try {
      await auth.requestPasswordChange(email);
      toast({
        title: 'Please check your Email',
        status: 'success',
        isClosable: true
      });
    } catch (error) {
      toast({
        title: 'We could not find your email address.',
        status: 'error',
        isClosable: true
      });
      console.log('Error is: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Heading as="h1" textAlign="center">
        Change password
      </Heading>
      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor="email">Enter your Email</FormLabel>
        <Input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email address is required',
            validate: (value) => {
              if (!validator.isEmail(value)) return 'Email is invalid';
            }
          })}
        />
        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Request;
