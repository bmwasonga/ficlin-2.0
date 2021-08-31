import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

import { data } from './herodata';

interface Props {
  headline: string;
  body: string;
}

const Hero: FC<Props> = () => {
  return (
    <Stack direction={['column', 'row', 'row']} spacing="24px" width="100%" m="2">
      {data.map((data, idx) => {
        const { headline, body } = data;
        return (
          <Box key={idx} p="3" m="2" boxShadow="md">
            <Heading fontSize="xl">{headline}</Heading>
            <Text mt={4}>{body}</Text>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Hero;
