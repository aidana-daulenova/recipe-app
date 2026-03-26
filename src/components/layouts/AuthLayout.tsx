import { Outlet } from "react-router-dom";
import { Flex, Box, Image } from "@chakra-ui/react";
import auth_image from "../../assets/auth_image.webp";

export default function AuthLayout() {
  return (
    <Flex h="100vh">
      <Box flexBasis="50%" h="100vh">
        <Image
          src={auth_image}
          alt={"main photo example"}
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>

      <Box flexBasis="50%">
        <Outlet />
      </Box>
    </Flex>
  );
}
