import {
  Flex,
  Text,
  Spacer,
  Button,
  Box,
  Avatar,
  Input,
  InputGroup,
  Card,
  HStack,
  CardBody,
  Badge,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { FaRegComment } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useThreads } from "@/hooks/useThreads";

export default function Forum() {
  const threads = useThreads((state) => state.threads);

  return (
    <Box p="3">
      <Flex align="center" gap="4">
        <Text textStyle="3xl" fontWeight="semibold">
          Forum
        </Text>

        <Spacer />

        <Button colorPalette="teal" color="white">
          + New thread
        </Button>
      </Flex>

      <Flex>
        <Text fontSize="sm" color="fg.muted" fontWeight="bold">
          Ask questions, share discoveries, swap ideas.
        </Text>
      </Flex>

      <Flex mt="2">
        <InputGroup startElement={<LuSearch />} maxW="50%">
          <Input placeholder="Search..." size="md" />
        </InputGroup>
      </Flex>

      {threads.map((thread) => (
        <Card.Root mt="4" maxW="89%" key={thread.id}>
          <Card.Header p="3">
            <Flex direction="row" justify="space-between">
              <HStack>
                <Avatar.Root colorPalette="teal">
                  <Avatar.Fallback name={thread.userName} />
                </Avatar.Root>
                <Text fontWeight="small">{thread.userName} </Text>
              </HStack>
              <Box>
                <Badge
                  colorPalette="teal"
                  borderRadius="full"
                  px="3"
                  fontWeight="bold"
                >
                  {thread.category}
                </Badge>
              </Box>
            </Flex>
          </Card.Header>

          <CardBody px="4" pt="1" pb="4">
            <Card.Title>{thread.title}</Card.Title>
            <Card.Description>
              <Text lineClamp={2}> {thread.description} </Text>
            </Card.Description>
          </CardBody>

          <Card.Footer px="4" pb="3">
            <HStack>
              <Button colorPalette="teal" variant="outline" size="xs">
                <FaRegComment /> {thread.comments}
              </Button>
              <Button colorPalette="teal" variant="outline" size="xs">
                <FaRegHeart /> {thread.likes}
              </Button>
              <Button colorPalette="teal" variant="outline" size="xs">
                <CiStar />
              </Button>
            </HStack>
          </Card.Footer>
        </Card.Root>
      ))}
    </Box>
  );
}
