import { Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  right?: string;
  left?: string;
  icon?: string;
  onClick: () => void;
}

const ImageHeaderButtons: React.FC<Props> = ({ left, right, icon, onClick }) => {
  return (
    <Text
      onClick={onClick}
      right={right}
      left={left}
      cursor="pointer"
      pos="absolute"
      top="50%"
      w="auto"
      mt="-22px"
      p="16px"
      color="white"
      fontWeight="bold"
      fontSize="18px"
      transition="0.6s ease"
      borderRadius="0 3px 3px 0"
      userSelect="none"
      _hover={{
        opacity: ' 0.8',
        bg: 'black'
      }}>
      {icon}
    </Text>
  );
};

export default ImageHeaderButtons;
