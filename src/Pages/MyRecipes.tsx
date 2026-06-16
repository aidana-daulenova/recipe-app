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
import { MdOutlineSearchOff } from "react-icons/md";

export default function MyRecipes() {
  const navigate = useNavigate();

  const recipes = useRecipe((state) => state.recipes);

  const [query, setQuery] = useState("");
  const [selectedMealType, setSelectedMealType] = useState(MealType.All);

  const handleClick = () => {
    navigate("/add-new-recipe");
  };

  const filtered = recipes.filter((recipe) => {
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesMealType =
      selectedMealType === MealType.All || recipe.mealType === selectedMealType;

    return matchesSearch && matchesMealType;
  });

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

        <InputGroup startElement={<LuSearch />} w="300px">
          <Input
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
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

      <Flex py={3}>
        <ButtonGroup size="sm" variant="outline" gap={3}>
          {mealTypes.map((type) => (
            <Button
              key={type}
              colorPalette="teal"
              rounded="3xl"
              onClick={() => setSelectedMealType(type)}
              bg={selectedMealType === type ? "green.200" : "transparent"}
              _hover={{
                bg: selectedMealType === type ? "green.200" : "green.100",
              }}
            >
              {type}
            </Button>
          ))}
        </ButtonGroup>
      </Flex>

      {filtered.length === 0 ? (
        <Flex justify="center" align="center" minH="60vh" gap={3}>
          <MdOutlineSearchOff size={60} />
          <Text fontSize="4xl">No recipes found</Text>
        </Flex>
      ) : (
        <Grid templateColumns="repeat(5, 1fr)" gap="10" pt={5}>
          {filtered.map((recipe) => (
            <Card.Root
              key={recipe.id}
              maxW="sm"
              overflow="hidden"
              borderRadius="xl"
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
      )}
    </Box>
  );
}
