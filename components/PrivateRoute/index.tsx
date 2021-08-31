import { useAuth } from '@nhost/react-auth';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { auth } from '@/utils/nhost';

type withAuthenticationFn = (Component: FC) => FC;

const PrivateRoute: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (props): JSX.Element | null => {
    const router = useRouter();
    const { signedIn } = useAuth();

    const allowedRoles = auth.getClaim('x-hasura-allowed-roles');
    // const defaultRoles = auth.getClaim('x-hasura-default-role');

    // console.log('the roles are', allowedRoles);
    // console.log('the default role is', defaultRoles);

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

    if (!allowedRoles.includes('ficlinAdmin')) {
      router.push('/');
      return <div>Redirecting...</div>;
    }

    if (!allowedRoles.includes('ficlinAdmin')) {
      router.push('/');
      return <div>Redirecting...</div>;
    }

    return <Component {...props} />;
  };

  return Authenticated;
};

export default PrivateRoute;

//find a use for the default roles and do more for the allowed roles
