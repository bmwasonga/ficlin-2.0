import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Container: React.FC = ({ children }: Props) => {
  return (
    <Box m="auto" width={['100%', '96%', '90%', '80%']}>
      {children}
    </Box>
  );
};

export default Container;
