import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function TopBar() {
  return (
    <Flex
      align="center"
      position="relative"
      paddingY="2%"
      paddingX="4%"
      borderBottomWidth="1px"
    >
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
