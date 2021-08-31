import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import React, { FC } from 'react';
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface Step {
  step: number;
  handleStepCompletion();
}

const ModalStepOne: FC<Step> = ({ step, handleStepCompletion }) => {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          When would you like to travel?
          <Text fontSize="sm">If you are not sure, chose a few.</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Wrap spacing={3}>
            {months.map((month, idx) => {
              return (
                <WrapItem key={idx}>
                  <Button bg="red.200">{month}</Button>
                </WrapItem>
              );
            })}
          </Wrap>
        </ModalBody>
        <ModalFooter>
          <Button onclick={handleStepCompletion}>Step{step}</Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

export default ModalStepOne;
