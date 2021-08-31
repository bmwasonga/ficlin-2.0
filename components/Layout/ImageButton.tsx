import { Text } from '@chakra-ui/react';
import React, { MouseEventHandler } from 'react';

interface Props {
  right?: string;
  left?: string;
  onClick?: MouseEventHandler | undefined;
}

const ImageButton: React.FC<Props> = ({ right, left, onClick }) => {
  return (
    <Text
      cursor="pointer"
      position="absolute"
      top="50%"
      w="auto"
      mt="22px"
      color="red"
      fontWeight="bold"
      fontSize="18px"
      transition="0.s ease"
      userSelect="none"
      _hover={{
        opacity: 0.8,
        bg: 'black'
      }}
      right={right}
      left={left}
      onClick={onClick}></Text>
  );
};

export default ImageButton;
