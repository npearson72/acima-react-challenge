import { Box, Center, Flex } from '@mantine/core';
import { Calculator, HtmlTables } from './components';

export const HomePage = () => {
  return (
    <Flex
      direction={{ base: 'column', xs: 'row-reverse' }}
      align="flex-start"
      gap={20}
    >
      <Center w={{ base: '100%', xs: 'calc(100% - 260px)' }}>
        <Calculator />
      </Center>

      <Box w={{ base: '100%', xs: 240 }}>
        <HtmlTables />
      </Box>
    </Flex>
  );
};
