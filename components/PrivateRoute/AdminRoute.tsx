import { useAuth } from '@nhost/react-auth';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { auth } from '@/utils/nhost';

type withAuthenticationFn = (Component: FC) => FC;

const AdminRoute: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (props): JSX.Element | null => {
    const router = useRouter();
    const { signedIn } = useAuth();

    const allowedRoles = auth.getClaim('x-hasura-allowed-roles');

    console.log('Allowed roles ***************: ', allowedRoles);

    //public routes
    if (signedIn === null) {
      return <div>Checking auth...</div>;
    }
    if (!signedIn) {
      router.push('/');
      return <div>Redirecting...</div>;
    }

    //private Routes

    if (!allowedRoles.includes('user')) {
      router.push('/');
      return <div>Redirecting...</div>;
    }

    return <Component {...props} />;
  };

  return Authenticated;
};

export default AdminRoute;

//find a use for the default roles and do more for the allowed roles
