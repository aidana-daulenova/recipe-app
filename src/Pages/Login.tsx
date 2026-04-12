import {
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Center,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const schema = z.object({
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
});

export default function Login({ setUser }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    const user = {
      email: data.email,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/");
  };

  return (
    <Center minH="100vh">
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>
            <Text textStyle="4xl">Log in page</Text>
          </Fieldset.Legend>
          <Fieldset.HelperText>Please enter your details</Fieldset.HelperText>
        </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset.Content>
            <Field.Root invalid={!!errors.email}>
              <Field.Label>Your email</Field.Label>
              <Input type="email" {...register("email")} />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={!!errors.password}>
              <Field.Label>Your password</Field.Label>
              <Input type="password" {...register("password")} />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>
          </Fieldset.Content>

          <Button type="submit" alignSelf="flex-start" mt={3}>
            Log In
          </Button>
        </form>

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
  );
}
