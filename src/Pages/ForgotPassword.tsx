import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Center,
  Text,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <Flex>
      <Box flexBasis="50%" h="100vh">
        <Image
          src={
            "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/perfect-coffee-orange-desk-esSGvuyiQZlUmAm68Rr6i.webp"
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
                <Text textStyle="4xl">Forgot your password</Text>
              </Fieldset.Legend>
              <Fieldset.HelperText>
                Provide your account email address to receive an email to reset
                your password.
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field.Root>
                <Input
                  name="email"
                  type="email"
                  onChange={(e) => setValue(e.target.value)}
                />
              </Field.Root>
            </Fieldset.Content>

            <Button
              alignSelf="flex-start"
              disabled={!value}
              onClick={() => navigate("/confirm-password")}
            >
              Send
            </Button>
          </Fieldset.Root>
        </Center>
      </Box>
    </Flex>
  );
}
