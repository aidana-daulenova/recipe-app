import {Stack, Link as ChakraLink} from "@chakra-ui/react"

function HealthyMenu() {
  return (
    <Stack align="flex-start" spacing={3}>
      <ChakraLink href="#">Recipes</ChakraLink>
      <ChakraLink href="#">Forum</ChakraLink>
      <ChakraLink href="#">About us</ChakraLink>
    </Stack>
  )
}


export default HealthyMenu;