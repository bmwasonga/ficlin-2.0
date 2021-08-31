import { useMutation } from '@apollo/client';
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
import { v4 as uuidv4 } from 'uuid';

import { ADD_COMPANY_ID } from '@/utils/api';
import { auth } from '@/utils/nhost';

const CreatorModal: FC = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [company_id] = useMutation(ADD_COMPANY_ID);

  const onSubmit = async (e) => {
    e.preventDefault();
    router.push('/');
    const generated = uuidv4();
    console.log('generated', generated);

    try {
      await company_id({
        variables: {
          id: auth.getClaim('x-hasura-user-id'),
          company_id: generated
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Creator</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome creator</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>
              If you proceed as a creator, you will be required to give details of your travel
              company, and this will enable you create, manage and share your trips on this latform.
              <br />
              best of luck cherio!!
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

export default CreatorModal;
