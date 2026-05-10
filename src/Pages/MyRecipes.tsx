import {
  Flex,
  Text,
  Spacer,
  Button,
  Box,
  Stack,
  Table,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecipe } from "@/hooks/useRecipe";

export default function MyRecipes() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add-new-recipe");
  };

  const recipes = useRecipe((state) => state.recipes);

  return (
    <Box p="3">
      <Flex>
        <Text textStyle="md" fontWeight="semibold">
          My recipes
        </Text>
        <Spacer />
        <Button
          colorPalette="teal"
          variant="surface"
          size="md"
          onClick={handleClick}
        >
          New recipe
        </Button>
      </Flex>

      <Stack>
        <Table.Root size="sm" striped>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Recipe name</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {recipes.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.title}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Stack>
    </Box>
  );
}
