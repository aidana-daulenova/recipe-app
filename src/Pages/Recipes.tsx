import {
  Flex,
  Grid,
  Image,
  Text,
  Box,
  InputGroup,
  Input,
} from "@chakra-ui/react";
import { useRecipe } from "@/hooks/useRecipe";
import { LuSearch } from "react-icons/lu";

export default function Recipes() {
  const recipes = useRecipe((state) => state.recipes);

  return (
    <Box p="3">
      <Flex mt="2" direction="row-reverse">
        <InputGroup
          startElement={<LuSearch />}
          maxW="25%"
          shadow="md"
          borderRadius="md"
        >
          <Input placeholder="Search..." size="md" />
        </InputGroup>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap="9" pt={3}>
        {recipes.map((recipe) => (
          <Flex
            key={recipe.id}
            direction={"column"}
            borderRadius="xl"
            gap="2"
            transition="all 0.3s ease"
            _hover={{
              transform: "scale(0.97)",
              bg: "white",
            }}
            cursor="pointer"
          >
            <Image
              src={recipe.imageUrl}
              h="300px"
              w="100%"
              objectFit="cover"
              objectPosition="center"
              borderRadius="4xl"
            />

            <Text
              fontSize="xl"
              textTransform="uppercase"
              as="b"
              color="teal.700"
            >
              {recipe.title}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
}
