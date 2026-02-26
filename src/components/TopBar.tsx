import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";

function TopBar() {
  return (
    <Flex align="center" px={10} mt="5px" position="relative" padding="1%">
      <ChakraLink
        as={RouterLink}
        to="/"
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
      >
        <Image
          src={logo}
          alt="MyRecipes logo"
          height="40px"
          objectFit="contain"
        />
      </ChakraLink>

      <ChakraLink
        as={RouterLink}
        to="/login"
        fontWeight="medium"
        _hover={{ textDecoration: "underline" }}
        ml="auto"
      >
        Log In
      </ChakraLink>
    </Flex>
  );
}

export default TopBar;
