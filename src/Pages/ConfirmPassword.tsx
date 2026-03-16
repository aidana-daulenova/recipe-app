import {
  Field,
  Fieldset,
  Stack,
  Center,
  Text,
  Button,
  PinInput,
  Link as ChakraLink,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function ForgotPassword() {
  const [value, setValue] = useState(["", "", "", ""]);
  return (
    <Flex>
      <Box flexBasis="50%" h="100vh">
        <Image
          src={
            "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/chocolate-caramel-cheesecake-l1RD3yu0oajt8qnoVQTU4.webp"
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
                <Text textStyle="4xl">Verify your email</Text>
              </Fieldset.Legend>
              <Fieldset.HelperText>
                Enter the verification code sent to your email:
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field.Root>
                <PinInput.Root
                  value={value}
                  onValueChange={(e) => setValue(e.value)}
                >
                  <PinInput.HiddenInput />
                  <PinInput.Control>
                    <PinInput.Input index={0} />
                    <PinInput.Input index={1} />
                    <PinInput.Input index={2} />
                    <PinInput.Input index={3} />
                  </PinInput.Control>
                </PinInput.Root>
              </Field.Root>
            </Fieldset.Content>
            <Button alignSelf="flex-start">Submit</Button>
            <Text textStyle="sm">
              Didn't receive the code?{" "}
              <ChakraLink as={RouterLink} variant="plain">
                Resend
              </ChakraLink>
            </Text>
          </Fieldset.Root>
        </Center>
      </Box>
    </Flex>
  );
}
