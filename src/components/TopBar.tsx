import { Flex, Image, Link as ChakraLink } from "@chakra-ui/react"
import { Link as RouterLink} from "react-router-dom"
import logo from "../assets/logo.png"

function TopBar() {
  return (
    <Flex
      align="center"
      justify="space-between"
      px={10}
    >

      <ChakraLink as={RouterLink} to="/" >
        <Image
          src={logo}
          alt="MyRecipes logo"
          height="75px"
          objectFit="contain"
        />
      </ChakraLink>

      <ChakraLink
        as={RouterLink}
        to="/login"
        fontWeight="medium"
        _hover={{ textDecoration: "underline" }}
      >
        Log In
      </ChakraLink>
    </Flex>
  )
}

export default TopBar