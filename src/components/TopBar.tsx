import {
  Button,
  Menu,
  Portal,
  Text,
  Flex,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";

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
        <Menu.Root>
          <Menu.Trigger asChild ml="auto">
            <FaUserCircle size="26px" />
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="new-txt">Profile</Menu.Item>
                <Menu.Item value="new-file">My recipes</Menu.Item>
                <Menu.Item value="new-win">Settings</Menu.Item>
                <Menu.Item value="open-file"> Log out </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
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
