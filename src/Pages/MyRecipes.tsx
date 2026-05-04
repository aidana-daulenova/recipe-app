import { Flex, Text, Spacer, Button, Box, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function MyRecipes() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add-new-recipe");
  };

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
        <Text fontWeight="light">Teriyaki pork ribs</Text>
        <Text fontWeight="light">Folded pancakes</Text>
        <Text fontWeight="light">Sourdough pancakes</Text>
      </Stack>
    </Box>
  );
}
