import {Stack, Link as ChakraLink} from "@chakra-ui/react"

function HealthyMenu() {
  return (
    <Stack align="flex-start" spacing={3}>
      <ChakraLink href="#" px={2} py={1} borderRadius="md" _hover={{ bg: "gray.200" }}>Recipes</ChakraLink>
      <ChakraLink href="#" px={2} py={1} borderRadius="md" _hover={{ bg: "gray.200" }}>Forum</ChakraLink>
      <ChakraLink href="#" px={2} py={1} borderRadius="md" _hover={{ bg: "gray.200" }}>About us</ChakraLink>
    </Stack>
  )
}


export default HealthyMenu;