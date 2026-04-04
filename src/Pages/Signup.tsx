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
  name: z.string().nonempty("Name is required"),
  email: z
    .string({ error: "Invalid email" })
    .min(1, { error: "This field is required" })
    .email({ error: "Invalid email" }),
});

export default function Signup() {
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
            <Text textStyle="4xl">Create an account</Text>
          </Fieldset.Legend>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset.Content>
            <Field.Root invalid={!!errors.name}>
              <Field.Label>Name</Field.Label>
              <Input type="name" {...register("name")} />
              <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.email}>
              <Field.Label>Email address</Field.Label>
              <Input type="email" {...register("email")} />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>
          </Fieldset.Content>

          <Button type="submit" alignSelf="flex-start" mt={3}>
            Join now
          </Button>
        </form>
      </Fieldset.Root>
    </Center>
  );
}
