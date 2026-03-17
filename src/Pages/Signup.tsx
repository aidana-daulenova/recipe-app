import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Center,
  Text,
} from "@chakra-ui/react";

export default function Signup() {
  return (
    <Center minH="100vh">
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>
            <Text textStyle="4xl">Create an account</Text>
          </Fieldset.Legend>
        </Stack>

        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input name="name" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Email address</Field.Label>
            <Input name="email" type="email" />
          </Field.Root>
        </Fieldset.Content>

        <Button type="submit" alignSelf="flex-start">
          Join now
        </Button>
      </Fieldset.Root>
    </Center>
  );
}
