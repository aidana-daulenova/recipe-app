import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import {
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";

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
      <HStack spacing={4}>
        <Text>Follow us:</Text>

        <TiSocialLinkedin size="28px" />
        <TiSocialInstagram size="28px" />
        <TiSocialFacebook size="28px" />
      </HStack>

      <Box>© 2026 Aidana Kassym Enterprises Limited</Box>
    </Flex>
  );
}
