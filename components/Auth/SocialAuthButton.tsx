import { Button } from '@chakra-ui/react';
import { FC } from 'react';

interface IProps {
  href: string;
  lefticon: React.ReactElement;
  btnText: string;
}

const SocialAuthButton: FC<IProps> = ({ href, lefticon, btnText }: IProps) => {
  return (
    <Button w="48%" as="a" href={href} leftIcon={lefticon}>
      {btnText}
    </Button>
  );
};

export default SocialAuthButton;
