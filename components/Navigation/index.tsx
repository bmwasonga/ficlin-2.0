import { Center, Flex, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import { useAuth } from '@nhost/react-auth';
import React, { useEffect, useState } from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { ImTicket } from 'react-icons/im';
import { RiAccountCircleFill, RiHome2Line } from 'react-icons/ri';
import { SiGnuprivacyguard } from 'react-icons/si';

import Container from '@/components/Container';
import MenuItem from '@/components/Navigation/MenuItem';
import { auth } from '@/utils/nhost';

import UserDropDownMenu from './UserDropDownMenu';

const Header: React.FC = () => {
  const allowedRoles = auth.getClaim('x-hasura-allowed-roles');

  const [isMobile, setIsMobile] = useState(false);
  const [mediaQuery] = useMediaQuery('(max-width: 620px)');

  const { signedIn } = useAuth();

  useEffect(() => {
    if (mediaQuery !== isMobile) {
      setIsMobile(mediaQuery);
    }
  }, [mediaQuery]);

  return (
    <Flex borderBottom="1px" borderColor="gray.300" h="16" direction="column">
      <Container>
        {isMobile ? (
          <>
            <Flex>
              <Center>
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                  Ficlin
                </Text>
              </Center>
            </Flex>

            <Flex
              justify="space-between"
              borderWidth="1px"
              overflow="hidden"
              position="fixed"
              width="100%"
              bottom={0}>
              <MenuItem href="/" title="h" icon={<RiHome2Line />} />
              <MenuItem href="/login" title="l" icon={<ImTicket />} />
              <MenuItem href="/profile" title="p" icon={<BiSearchAlt />} />
              <MenuItem href="/signup" title="s" icon={<RiAccountCircleFill />} />
            </Flex>
          </>
        ) : (
          <Flex py="2">
            <Center>
              <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                Ficlin
              </Text>
            </Center>
            <Spacer />
            {allowedRoles && !allowedRoles.includes('ficlinAdmin') && (
              <MenuItem href="/" title="Ticket resale" icon={<ImTicket />} />
            )}

            {signedIn ? (
              <UserDropDownMenu />
            ) : (
              <>
                <MenuItem href="/login" title="Log in" icon={<AiOutlineLogin />} />
                <MenuItem
                  href="/signup"
                  title="Get started"
                  icon={<SiGnuprivacyguard />}
                  colorScheme="linkedin"
                />
              </>
            )}
          </Flex>
        )}
      </Container>
    </Flex>
  );
};

export default Header;
