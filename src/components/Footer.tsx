import { Box, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      w="full"
      py={6}
      px={8}
      bg="gray.100"
      justify="space-between"
      align="center"
    >
      <Box flex={3}>Follow us:</Box>
      <Box flex={1}>© 2025 Aidana Kassym Enterprises Limited</Box>
    </Flex>
  );
}
