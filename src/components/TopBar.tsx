import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaUser } from "react-icons/fa";

export default function TopBar({ user }) {
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

      {user ? (
        <FaUser size="23px" style={{ marginLeft: "auto" }} />
      ) : (
        <ChakraLink
          as={RouterLink}
          to="/login"
          fontWeight="medium"
          _hover={{ textDecoration: "underline" }}
          ml="auto"
        >
          Log In
        </ChakraLink>
      )}
    </Flex>
  );
}
