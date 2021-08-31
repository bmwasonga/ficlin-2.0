import { Box, Button, Modal, useDisclosure } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import ModalStep4 from './ModalStep4';
import ModalStepOne from './ModalStepOne';
import ModalStepThree from './ModalStepThree';
import ModalStepTwo from './ModalStepTwo';

const STEPS_AMOUNT = 4;

const CModal: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formStep, setFormStep] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty }
  } = useForm({
    mode: 'onChange'
  });

  const handleStepCompletion = () => {
    setFormStep((cur) => cur + 1);
  };

  const handleGoBackToPreviousStep = () => {
    setFormStep((cur) => cur - 1);
  };

  const onSubmit = (values): void => {
    console.log(JSON.stringify(values, null, 2));
    handleStepCompletion();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Find my tour
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          {formStep < STEPS_AMOUNT && (
            <Box>
              {formStep > 0 && (
                <Button onClick={handleGoBackToPreviousStep}>
                  {' '}
                  Step {formStep + 1} of {STEPS_AMOUNT}
                </Button>
              )}
            </Box>
          )}
          {formStep >= 0 && (
            <>
              <ModalStepOne handleStepCompletion={handleStepCompletion} step={0} />
              {/* <Button onClick={handleStepCompletion}>Next</Button> */}
            </>
          )}
          {formStep >= 1 && (
            <>
              <ModalStepTwo />
            </>
          )}
          {formStep >= 3 && (
            <>
              <ModalStepThree />
            </>
          )}
          {formStep >= 4 && (
            <>
              <ModalStep4 />
            </>
          )}
        </Modal>
      </Button>
    </>
  );
};

export default CModal;
//include option for more  in the mordal
//add moment to figure out current year
// all content will be handled by react form hook
