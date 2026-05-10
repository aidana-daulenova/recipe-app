import { Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useRecipe } from "@/hooks/useRecipe";

export default function Recipes() {
  const recipes = useRecipe((state) => state.recipes);

  return (
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

          <Text fontSize="xl" textTransform="uppercase" as="b" color="teal.700">
            {recipe.title}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
}
