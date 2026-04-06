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

const SPECIAL_CHARS_REGEX = /[!@#$%^&*()]/;

const schema = z
  .object({
    name: z
      .string()
      .nonempty("Name is required")
      .transform((s) => s.trim())
      .refine((s) => s.length > 0, { message: "Incorrect name" })
      .refine((val) => !SPECIAL_CHARS_REGEX.test(val), {
        error: "Name must not contain !@#$%^&*()",
      }),
    lastName: z
      .string()
      .nonempty("Last name is required")
      .transform((s) => s.trim())
      .refine((s) => s.length > 0, { message: "Incorrect last name" })
      .refine((val) => !SPECIAL_CHARS_REGEX.test(val), {
        error: "Name must not contain !@#$%^&*()",
      }),
    email: z
      .string({ error: "Invalid email" })
      .min(1, { error: "This field is required" })
      .email({ error: "Invalid email" }),
    password: z
      .string()
      .refine((val) => !/\s/.test(val), {
        error: "Password must not contain spaces",
      })
      .min(6, "At least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
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

            <Field.Root invalid={!!errors.lastName}>
              <Field.Label>Last name</Field.Label>
              <Input type="lasname" {...register("lastName")} />
              <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.email}>
              <Field.Label>Email address</Field.Label>
              <Input type="email" {...register("email")} />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.password}>
              <Field.Label>Password</Field.Label>
              <Input type="password" {...register("password")} />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.confirmPassword}>
              <Field.Label>Confirm password</Field.Label>
              <Input type="password" {...register("confirmPassword")} />
              <Field.ErrorText>
                {errors.confirmPassword?.message}
              </Field.ErrorText>
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
