import { Heading } from '@chakra-ui/layout';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spacer
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';

import SocialAuthButtonsWrapper from '@/components/Auth/SocialAuthButtonsWrapper';
import { auth } from '@/utils/nhost';

interface IFormInput {
  email: string;
  username: string;
  password: string;
}

const SignUpForm: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  const router = useRouter();

  const onSubmit = async (values: IFormInput) => {
    const { email, password, username: display_name } = values;
    try {
      await auth.register({
        email,
        password,
        options: { userData: { display_name } }
      });
      router.push('/selectaccount');
    } catch (error) {
      console.log('Error is: ', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* username */}
        <Heading as="h1" textAlign="center">
          Register
        </Heading>
        <SocialAuthButtonsWrapper />

        <FormControl isInvalid={errors.username}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 3, message: 'Username should be at least 3 characters long' }
            })}
          />
          <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
        </FormControl>

        {/* email */}
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
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

        {/* password */}
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

        {/* submit button */}
        <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
        <Flex>
          <Link href="/login">
            <a>already have a account? </a>
          </Link>
          <Spacer />
          <Link href="/request">
            <a>Forgot your password?</a>
          </Link>
        </Flex>
      </form>
    </>
  );
};

export default SignUpForm;
