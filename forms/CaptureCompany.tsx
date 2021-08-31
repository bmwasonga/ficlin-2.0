import { useMutation } from '@apollo/client';
import { Button, FormLabel, Input, useToast } from '@chakra-ui/react';
import router from 'next/router';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { ADD_COMPANY_DETAILS } from '@/utils/api';
import { auth } from '@/utils/nhost';

interface CreateForm {
  companyEmail: string;
  companyName: string;
}

const CaptureCompany: FC = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const user_id = auth.getClaim('x-hasura-user-id');

  const [object] = useMutation(ADD_COMPANY_DETAILS);

  const onSubmit = async (data: CreateForm) => {
    // alert(JSON.stringify(data));

    const { companyEmail, companyName } = data;
    try {
      await object({
        variables: {
          company_email: companyEmail,
          company_name: companyName,
          company_id: auth.getClaim('x-hasura-company-id'),
          created_by: user_id
        }
      });
      toast({
        title: 'SUCCESS.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true
      });
      router.push('/');
    } catch (error) {
      console.log(error);
      toast({
        title: 'Something went wrong.',
        description: 'We could not register your company at the moment. Please try again..',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormLabel>Company Name</FormLabel>
        <Input
          placeholder="Enter your company Name."
          type="text"
          {...register('companyEmail', { required: 'This feild is required', maxLength: 80 })}
        />

        <FormLabel>Company Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your company Email."
          {...register('companyName', { required: 'This feild is required', maxLength: 80 })}
        />
        {/* submit button */}
        <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CaptureCompany;
