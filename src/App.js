import React from 'react';
import { ChakraProvider, Box, Flex, HStack, theme } from '@chakra-ui/react';

import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { AppRoutes } from './Routes';

function App({ children, to, ...props }) {
  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <div>
        <Link
          style={{ textDecoration: match ? 'underline' : 'none' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex justifyContent="flex-end">
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>

        <HStack>
          {/* <CustomLink to="/form">Form</CustomLink> */}

          <CustomLink to="/Personal-info">Personal Info Form</CustomLink>
        </HStack>

        <Flex justifyContent="center">
          <AppRoutes />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
