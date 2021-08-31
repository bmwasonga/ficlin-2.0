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
import React from 'react';
import { useForm } from 'react-hook-form';

import { auth } from '@/utils/nhost';

interface Passwords {
  oldpassword: string;
  newpassword: string;
}

const Change: NextPage = () => {
  const toast = useToast();
  const router = useRouter();

  const { ticket } = router.query;

  console.log(ticket);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (value: Passwords) => {
    const { oldpassword, newpassword } = value;
    try {
      await auth.changePassword(oldpassword, newpassword);
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
        Change your password
      </Heading>
      <FormControl isInvalid={errors.oldpassword}>
        <FormLabel htmlFor="password">Old Password</FormLabel>
        <Input
          id="oldpassword"
          type="password"
          {...register('oldpassword', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Minimum length should be 6' }
          })}
        />
        <FormErrorMessage>{errors.oldpassword && errors.oldpassword.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.newpassword}>
        <FormLabel htmlFor="password">New Password</FormLabel>
        <Input
          id="newpassword"
          type="password"
          {...register('newpassword', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Minimum length should be 6' }
          })}
        />
        <FormErrorMessage>{errors.newpassword && errors.newpassword.message}</FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Change;
