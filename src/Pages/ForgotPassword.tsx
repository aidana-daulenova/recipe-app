import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Center,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.email("Invalid email"),
});

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("User data:", data);
  };

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset.Content>
            <Field.Root invalid={!!errors.email}>
              <Input type="email" {...register("email")} />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>
          </Fieldset.Content>

          <Button alignSelf="flex-start" mt={3} type="submit">
            Send
          </Button>
        </form>
      </Fieldset.Root>
    </Center>
  );
}
