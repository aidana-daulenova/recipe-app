import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Center,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  return (
    <Center minH="100vh">
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>
            <Text textStyle="4xl">Forgot your password</Text>
          </Fieldset.Legend>
          <Fieldset.HelperText>
            Provide your account email address to receive an email to reset your
            password.
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
  );
}
