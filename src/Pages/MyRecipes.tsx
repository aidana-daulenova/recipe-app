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
  ButtonGroup,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecipe, MealType } from "@/hooks/useRecipe";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";

export default function MyRecipes() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add-new-recipe");
  };

  const recipes = useRecipe((state) => state.recipes);

  const [selectedMealType, setSelectedMealType] = useState(MealType.All);

  const filteredRecipes =
    selectedMealType === MealType.All
      ? recipes
      : recipes.filter((recipe) => recipe.mealType === selectedMealType);

  const mealTypes = [
    MealType.All,
    MealType.Breakfast,
    MealType.Lunch,
    MealType.Dinner,
    MealType.Dessert,
    MealType.Baking,
  ];

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

      <Flex py={2}>
        <ButtonGroup size="sm" variant="outline" gap={3}>
          {mealTypes.map((type) => (
            <Button
              colorPalette="teal"
              rounded="3xl"
              onClick={() => setSelectedMealType(type)}
              bg={selectedMealType === type ? "green.200" : "transparent"}
              key={type}
              _hover={{
                bg: selectedMealType === type ? "green.200" : "green.100",
              }}
            >
              {type}
            </Button>
          ))}
        </ButtonGroup>
      </Flex>

      <Grid templateColumns="repeat(5, 1fr)" gap="10" pt={5}>
        {filteredRecipes.map((recipe) => (
          <Card.Root
            maxW="sm"
            overflow="hidden"
            borderRadius="xl"
            key={recipe.id}
          >
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
