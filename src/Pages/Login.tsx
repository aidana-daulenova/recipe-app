import { Button, Field, Fieldset, Input,  Stack, Center,} from "@chakra-ui/react"

function LoginPage() {
  return (
    <Center minH="100vh">
    <Fieldset.Root size="lg" maxW="md">
      <Stack>
        <Fieldset.Legend>Log In page</Fieldset.Legend>
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
    </Fieldset.Root>ç
    </Center>
  )
};

export default LoginPage;