import { Box, Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Sidebar } from './elements/Sidebar';

export const defaultLayout = (page: ReactElement) => {
  return (
    <Flex css={{ backgroundColor: '#f9f9f9' }}>
      <Sidebar />
      <Flex
        flexDirection="column"
        h="100vh"
        flexGrow={1}
        flexShrink={1}
        flexBasis={0}
      >
        <Box
          as="main"
          flexGrow={1}
          flexShrink={1}
          flexBasis={0}
          ml={32}
          p={4}
          pl={0}
        >
          {page}
        </Box>
        <Box as="footer" flex="none">
          Footer
        </Box>
      </Flex>
    </Flex>
  );
};
