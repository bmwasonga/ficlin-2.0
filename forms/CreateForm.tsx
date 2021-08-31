import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Switch,
  Textarea,
  VStack
} from '@chakra-ui/react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { MdAttachMoney } from 'react-icons/md';

const CreateTour: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid }
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => console.log(data);

  //stepper starts here
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0
  });

  return (
    // give a fixed height for this to make it stop moving
    <Box boxShadow="xl" p="6" rounded="md" bg="white" mb={6}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* noValidate  removed from above */}
        <VStack width="100%">
          <Steps activeStep={activeStep}>
            <Step label="Step">
              {/* TOUR TITLE */}
              <FormControl isInvalid={errors.tour_title}>
                <FormLabel>Catchy name of the tour</FormLabel>
                <Input
                  placeholder="This is the title of the tour."
                  {...register('tour_title', {
                    required: 'This feild is required',
                    minLength: {
                      value: 10,
                      message: 'Name of the tour should exceed 10 charachters'
                    }
                  })}
                />
                <FormErrorMessage>
                  {errors.tour_title && errors.tour_title.message}
                </FormErrorMessage>
              </FormControl>

              {/* TOUR DESCRIPTION */}
              <FormControl isInvalid={errors.tour_description}>
                <FormLabel>Description of the tour </FormLabel>
                <Textarea
                  placeholder="Give a brief description of the tour"
                  {...register('tour_description', {
                    required: 'This feild is required',
                    minLength: {
                      value: 10,
                      message: 'Please enter a tour description of the tour.'
                    }
                  })}
                />
                <FormErrorMessage>
                  {errors.tour_description && errors.tour_description.message}
                </FormErrorMessage>
              </FormControl>

              {/* TOUR DESTINATION */}
              <FormControl isInvalid={errors.tour_destination}>
                <FormLabel>Tour Destination</FormLabel>
                <Input
                  placeholder="Dstination of the tour."
                  {...register('tour_destination', {
                    required: 'This feild is required',
                    minLength: { value: 3, message: 'Enter the destination of the tour.' }
                  })}
                />
                <FormErrorMessage>
                  {errors.tour_destination && errors.tour_destination.message}
                </FormErrorMessage>
              </FormControl>
            </Step>
            <Step label="Step2">
              {/* TOUR START DAY */}
              <FormControl isInvalid={errors.start_date}>
                <FormLabel> Start date</FormLabel>
                <Input
                  className="date-picker"
                  type="date"
                  name=""
                  id=""
                  {...register('start_date', {
                    required: 'This feild is required',
                    minLength: { value: 8, message: 'Enter a valid Date' }
                  })}
                />
                <FormErrorMessage>
                  {errors.start_date && errors.start_date.message}
                </FormErrorMessage>
              </FormControl>

              {/* TOUR END DATE */}
              <FormControl isInvalid={errors.end_date}>
                <FormLabel> End date</FormLabel>
                <Input
                  type="date"
                  name=""
                  id=""
                  {...register('end_date', {
                    required: 'This feild is required',
                    minLength: { value: 8, message: 'Enter a valid Date' }
                  })}
                />
                <FormErrorMessage>{errors.end_date && errors.end_date.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.no_of_days}>
                <FormLabel>Days</FormLabel>
                <Input
                  placeholder="Number of days for the trip."
                  {...register('no_of_days', {
                    required: 'This feild is required',
                    minLength: { value: 1, message: 'Please enter the number of Days' }
                  })}
                />

                <FormErrorMessage>
                  {errors.no_of_days && errors.no_of_days.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.no_of_nights}>
                <FormLabel>Nights</FormLabel>
                <Input
                  placeholder="Number of nights for the trip."
                  {...register('no_of_nights', {
                    required: 'This feild is required',
                    minLength: { value: 1, message: 'Please enter the number of Days' }
                  })}
                />

                <FormErrorMessage>
                  {errors.no_of_nights && errors.no_of_nights.message}
                </FormErrorMessage>
              </FormControl>
            </Step>

            <Step label="step 3">
              <FormLabel>Child friendly? </FormLabel>
              <Switch id="allow-children" defaultIsChecked {...register('allow_children')} />

              <FormControl isInvalid={errors.child_cost}>
                <FormLabel>Child cost </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    // eslint-disable-next-line react/no-children-prop
                    children={<MdAttachMoney />}
                  />
                  <Input
                    placeholder="Enter amount"
                    {...register('child_cost', {
                      required: 'This feild is required',
                      maxLength: 80
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.child_cost && errors.child_cost.message}
                </FormErrorMessage>
              </FormControl>
            </Step>
            <Step label="Step 4">
              <FormControl isInvalid={errors.adult_cost}>
                <FormLabel>Adult cost</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    // eslint-disable-next-line react/no-children-prop
                    children={<MdAttachMoney />}
                  />
                  <Input
                    placeholder="Enter amount"
                    {...register('adult_cost', {
                      required: 'This feild is required',
                      maxLength: 80
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.adult_cost && errors.adult_cost.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.reservation_cost}>
                <FormLabel>Restervation cost</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    // eslint-disable-next-line react/no-children-prop
                    children={<MdAttachMoney />}
                  />
                  <Input
                    placeholder="Enter amount"
                    {...register('reservation_cost', {
                      required: 'This feild is required',
                      maxLength: 80
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.reservation_cost && errors.reservation_cost.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.seats_available}>
                <FormLabel>Seats Available</FormLabel>
                <Input
                  placeholder="Number of seats available."
                  {...register('seats_available', {
                    required: 'This feild is required',
                    minLength: { value: 1, message: 'Please enter number os seats available' }
                  })}
                />

                <FormErrorMessage>
                  {errors.seats_available && errors.seats_available.message}
                </FormErrorMessage>
              </FormControl>
            </Step>
          </Steps>

          {activeStep === 4 ? (
            <Flex>
              <Button
                m={2}
                isDisabled={activeStep < 1}
                onClick={() => {
                  prevStep();
                }}>
                Back
              </Button>
              <Button m={2} colorScheme="teal" isLoading={isSubmitting} type="submit">
                Submit
              </Button>
            </Flex>
          ) : (
            <Flex>
              <Button
                m={2}
                isDisabled={activeStep === 0}
                onClick={() => {
                  prevStep();
                }}>
                Back
              </Button>
              <Spacer />
              <Button
                // isDisabled={activeStep && !isValid}
                m={2}
                onClick={() => {
                  nextStep();
                }}>
                Forward
              </Button>
            </Flex>
          )}
        </VStack>
      </form>
    </Box>
  );
};

export default CreateTour;
