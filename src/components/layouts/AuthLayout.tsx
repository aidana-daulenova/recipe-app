import { Outlet } from "react-router-dom";
import { Flex, Box, Image } from "@chakra-ui/react";

export default function AuthLayout() {
  return (
    <Flex>
      <Box flexBasis="50%" h="100vh">
        <Image
          src={
            "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/colorful-breakfast-spread-with-scrambled-eggs-and-fruits-o-JfhzQPrkHYvy3JumgvH.webp"
          }
          alt={"main photo example"}
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </Box>

      <Box flexBasis="50%">
        <Outlet />;
      </Box>
    </Flex>
  );
}
