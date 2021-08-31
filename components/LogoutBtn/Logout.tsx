import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

import { auth } from '@/utils/nhost';

const Logout: React.FC = (): JSX.Element | null => {
  const router = useRouter();

  const handleLogout = () => {
    auth.logout(false);
    router.push('/');
  };
  return (
    <div>
      <Button onClick={handleLogout} type="submit" variant="ghost" width="100%">
        Logout
      </Button>
    </div>
  );
};

export default Logout;
