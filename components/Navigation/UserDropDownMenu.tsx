import { useQuery } from '@apollo/client';
import { Link, Menu, MenuButton, MenuItem, MenuList, Portal } from '@chakra-ui/react';
import { FC } from 'react';

import { GET_USER_DATA } from '@/utils/api';
import { auth } from '@/utils/nhost';

import Logout from '../LogoutBtn/Logout';

const UserDropDownMenu: FC = () => {
  const { loading, error, data } = useQuery(GET_USER_DATA, {
    variables: {
      id: auth.getClaim('x-hasura-user-id')
    }
  });

  const allowedRoles = auth.getClaim('x-hasura-allowed-roles');

  if (loading && !data) return <p>Loading ...</p>;
  if (error) return <p>Error...</p>;

  const {
    users_by_pk: { display_name }
  } = data;
  // console.log('Data is: ', data);

  return (
    <Menu>
      <MenuButton transition="all 0.2s">{display_name}</MenuButton>
      <Portal>
        <MenuList>
          <MenuItem>
            <Link width="100%" href="profile">
              My Profile
            </Link>
          </MenuItem>
          {allowedRoles && allowedRoles.includes('publisher') ? (
            <MenuItem>
              <Link width="100%" href="/create">
                Creator Dashboard
              </Link>
            </MenuItem>
          ) : (
            <>
              <MenuItem>
                <Link width="100%" href="/selectaccount">
                  Resgister as a company
                </Link>
              </MenuItem>
            </>
          )}

          <MenuItem>
            <Link width="100%">This is odd</Link>
          </MenuItem>
          <MenuItem>
            <Link width="100%" href="/loggedinpasschange">
              Change password?
            </Link>
          </MenuItem>
          <Logout />
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default UserDropDownMenu;
