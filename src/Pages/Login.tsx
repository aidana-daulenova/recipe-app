import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Center,
  Text,
  Link as ChakraLink,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Login() {
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
        <Center minH="100vh">
          <Fieldset.Root size="lg" maxW="md">
            <Stack>
              <Fieldset.Legend>
                <Text textStyle="4xl">Log in page</Text>
              </Fieldset.Legend>
              <Fieldset.HelperText>
                Please enter your details
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Your email</Field.Label>
                <Input name="email" type="email" />
              </Field.Root>

              <Field.Root>
                <Field.Label>Your password</Field.Label>
                <Input name="password" type="password" />
              </Field.Root>
            </Fieldset.Content>

            <Button type="submit" alignSelf="flex-start">
              Log In
            </Button>

            <ChakraLink as={RouterLink} to="/forgot-password" variant="plain">
              Forgot Password?
            </ChakraLink>

            <Text>
              Don&apos;t have an account?{" "}
              <ChakraLink as={RouterLink} to="/signup" variant="plain">
                Join now
              </ChakraLink>
            </Text>
          </Fieldset.Root>
        </Center>
      </Box>
    </Flex>
  );
}
