import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { auth } from '@/utils/nhost';

interface Password {
  password: string;
}

const Change: FC = () => {
  const toast = useToast();
  const router = useRouter();

  const { ticket } = router.query;

  console.log(ticket);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (value: Password) => {
    const { password } = value;
    try {
      await auth.confirmPasswordChange(password, ticket[0]);
      toast({
        title: 'Your password has been changed successfully',
        status: 'success',
        isClosable: true
      });
    } catch (error) {
      toast({
        title: 'We could not change your password.',
        status: 'error',
        isClosable: true
      });
      console.log('Error is: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Heading as="h1" textAlign="center">
        New password
      </Heading>
      <FormControl isInvalid={errors.password}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Minimum length should be 6' }
          })}
        />
        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Change;
