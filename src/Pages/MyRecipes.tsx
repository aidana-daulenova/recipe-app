import {
  Flex,
  Text,
  Spacer,
  Button,
  Box,
  Grid,
  Image,
  Input,
  InputGroup,
  Card,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecipe } from "@/hooks/useRecipe";
import { LuSearch } from "react-icons/lu";

export default function MyRecipes() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add-new-recipe");
  };

  const recipes = useRecipe((state) => state.recipes);

  return (
    <Box p="3">
      <Flex align="center" gap="4">
        <Text textStyle="2xl" fontWeight="semibold">
          My recipes
        </Text>

        <Spacer />

        <InputGroup flex="5" startElement={<LuSearch />} maxW={120}>
          <Input placeholder="Search..." size="md" />
        </InputGroup>

        <Button
          colorPalette="black"
          variant="outline"
          size="md"
          onClick={handleClick}
        >
          New recipe
        </Button>
      </Flex>

      <Grid templateColumns="repeat(5, 1fr)" gap="10" pt={5}>
        {recipes.map((recipe) => (
          <Card.Root maxW="sm" overflow="hidden" borderRadius="xl">
            <Image
              src={recipe.imageUrl}
              h="200px"
              w="100%"
              objectFit="cover"
              objectPosition="center"
            />
            <Card.Body gap="1" p="3">
              <Card.Title fontSize="sm" lineHeight="short" noOfLines={2}>
                {recipe.title}
              </Card.Title>
              <Text fontSize="xs" color="gray.500" noOfLines={1}>
                {recipe.mealType}
              </Text>
            </Card.Body>
          </Card.Root>
        ))}
      </Grid>
    </Box>
  );
}
