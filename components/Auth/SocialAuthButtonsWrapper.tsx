import { Flex, Spacer } from '@chakra-ui/react';
import { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';

import SocialAuthButton from '@/components/Auth/SocialAuthButton';

const GOOGLE_LOGIN = process.env.NEXT_PUBLIC_NHOST_GOOGLE_LOGIN;

const SocialAuthButtonsWrapper: FC = () => {
  return (
    <Flex>
      <SocialAuthButton href={GOOGLE_LOGIN} lefticon={<FcGoogle />} btnText="Google" />
      <Spacer />
      <SocialAuthButton href={GOOGLE_LOGIN} lefticon={<ImFacebook2 />} btnText="Facebook" />
    </Flex>
  );
};

export default SocialAuthButtonsWrapper;
