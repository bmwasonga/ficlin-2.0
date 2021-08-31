import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

const TravellerModal: FC = () => {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = () => {
    router.push('/');
  };
  return (
    <>
      <Button onClick={onOpen}>Adventurer</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome adventurer!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>
              As an adventurer, you will be able to view, and reserve the trips and tours that we
              have here listed.
              <br />
              probably include terms and conditions here
            </h1>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={onSubmit}>
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TravellerModal;
