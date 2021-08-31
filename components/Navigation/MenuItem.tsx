import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  href?: string;
  title?: string;
  icon?: JSX.Element;
  colorScheme?: string;
}

const MenuItem: React.FC<Props> = ({ href = '', title = '', icon, colorScheme }: Props) => {
  const router = useRouter();

  return (
    <Button
      colorScheme={colorScheme}
      lefticon={icon}
      variant="ghost"
      _hover={{ bg: 'transparent', color: 'blue' }}
      size="lg"
      onClick={() => router.push(href)}>
      {title}
    </Button>
  );
};

export default MenuItem;
