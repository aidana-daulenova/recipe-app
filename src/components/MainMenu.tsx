import { Stack, Link as ChakraLink } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"

export default function MainMenu() {
  const location = useLocation();

  return (
    <Stack align="flex-start" spacing={3}>
      <ChakraLink 
        href="/recipes" 
        minW="170px"
        px={2} 
        py={1} 
        borderRadius="md" 
        bg={location.pathname === "/recipes" ? "teal.100" : "transparent"}
        _hover={{ bg: 'gray.200', textDecoration: "none" }}
        >
          Recipes
      </ChakraLink>

      <ChakraLink 
        minW="170px"
        href="/forum" 
        px={2} 
        py={1} 
        borderRadius="md" 
        bg={location.pathname === "/forum" ? "teal.100" : "transparent"}
        _hover={{ bg: 'gray.200', textDecoration: "none" }}
        >
          Forum
      </ChakraLink>

      <ChakraLink 
        href="/about-us" 
        minW="170px"
        px={2} 
        py={1} 
        borderRadius="md" 
        bg={location.pathname === "/about-us" ? "teal.100" : "transparent"}
        _hover={{ bg: 'gray.200', textDecoration: "none" }}
        >
          About Us
      </ChakraLink>
    </Stack>
  )
}