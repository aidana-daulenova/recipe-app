import { Flex, Grid, Image, Text } from "@chakra-ui/react";

const quickRecipes = [
  {
    id: 1,
    imageUrl:
      "https://asset.jamieoliver.com/images/cq7w2e71/production/1e363315035cfaf21dbe02bbeff00500358eae63-916x1280.jpg/163194082?rect=0,30,916,1221&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format",
    imageAlt: "Cherry Bakewell overnight oats ",
    title: "Cherry Bakewell overnight oats",
    time: null,
  },
  {
    id: 2,
    imageUrl:
      "https://asset.jamieoliver.com/images/cq7w2e71/production/52e8ad43ecf9bccc309b5db5998dc56dc005e90c-946x1279.jpg/163194083?rect=0,10,946,1261&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format",
    imageAlt: "Peach Melba overnight oats",
    title: "Peach Melba overnight oats",
    time: null,
  },
  {
    id: 3,
    imageUrl:
      "https://asset.jamieoliver.com/images/cq7w2e71/production/21ed656d7d793dfbf1b30af1217abf76d0088c42-1064x1280.jpg/163194080?rect=52,0,960,1280&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format",
    imageAlt: "Mothership overnight oats",
    title: "Mothership overnight oats",
    time: "10 mins",
  },
  {
    id: 4,
    imageUrl:
      "https://asset.jamieoliver.com/images/cq7w2e71/production/8cbd029e640df02e96ffc4aed208f88e2716e51b-1034x1279.jpg/163194096?rect=38,0,959,1279&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format",
    imageAlt: "Smoked salmon & rye omelette",
    title: "Smoked salmon & rye omelette",
    time: "9 mins",
  },
  {
    id: 5,
    imageUrl:
      "https://asset.jamieoliver.com/images/cq7w2e71/production/61ed68fe1215a5775b1fdcd715897f485559f5fe-853x1279.jpg/146013998?rect=0,72,853,1137&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format",
    imageAlt: "PBJ overnight oats",
    title: "PBJ overnight oats",
    time: "15 mins",
  },
  {
    id: 6,
    imageUrl:
      "https://asset.jamieoliver.com/images/cq7w2e71/production/ef34d34cb6df4b278487d630d8ad0aad3b3898d9-1200x1800.jpg/sweetpotatopancakes.jpg?rect=0,100,1200,1600&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format",
    imageAlt: "Sweet potato & sweetcorn pancakes",
    title: "Sweet potato & sweetcorn pancakes",
    time: "20 mins",
  },
  {
    id: 7,
    imageUrl:
      "https://asset.jamieoliver.com/images/cq7w2e71/production/02eb270ed166f8e501bd64b6664b4cc0adff7288-1200x1801.jpg/carrotcakepancakes.jpg?rect=0,101,1200,1600&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format",
    imageAlt: "Carrot cake pancakes",
    title: "Carrot cake pancakes",
    time: "15 mins",
  },
  {
    id: 8,
    imageUrl:
      "https://asset.jamieoliver.com/images/cq7w2e71/production/c036574cf7782de5b430f8c309457efabbea1709-1200x1800.jpg/applepancakes.jpg?rect=0,100,1200,1600&w=1920&h=2560&fm=webp&q=80&fit=crop&auto=format",
    imageAlt: "Mini apple pancakes",
    title: "Mini apple pancakes",
    time: "20 mins",
  },
];

export default function Recipes() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="9" pt={3}>
      {quickRecipes.map((recipe) => (
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
            alt={recipe.imageAlt}
            h="300px"
            w="100%"
            objectFit="cover"
            objectPosition="center"
            borderRadius="4xl"
          />

          <Text fontSize="xl" textTransform="uppercase" as="b" color="teal.700">
            {recipe.title}
          </Text>

          <Text fontSize="md" color="teal.700">
            {recipe.time}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
}
