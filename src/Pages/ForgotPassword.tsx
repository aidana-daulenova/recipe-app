import {Button, Field, Fieldset, Input, Stack, Center, Text} from "@chakra-ui/react"

export default function ForgotPassword() {
  return (
    <Center minH="100vh">
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>
            <Text textStyle="4xl">Forgot your Password</Text>
          </Fieldset.Legend>
        </Stack>

        <Fieldset.Content>
          <Field.Root>
            <Field.Label>Provide your account email address to receive an email to reset your password.</Field.Label>
            <Input name="email" type="email" />
          </Field.Root>
        </Fieldset.Content>

        <Button type="submit" alignSelf="flex-start">
          Send
        </Button>
      </Fieldset.Root>
    </Center> 
  )
}