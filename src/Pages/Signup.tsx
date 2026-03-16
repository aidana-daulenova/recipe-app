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

export default function Signup() {
  return (
    <Flex>
      <Box flexBasis="50%" h="100vh">
        <Image
          src={
            "https://pub-aaa82e9851064d22b954c3ebbafc9ae6.r2.dev/legacy/webp/creamy-chia-seed-parfait-with-raspberries-w4PIVNFRi8whhtayx4yi8.webp"
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
      </Box>
    </Flex>
  );
}
