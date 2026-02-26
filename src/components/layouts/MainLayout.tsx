import { Outlet } from "react-router-dom";
import TopBar from "@/components/TopBar";
import MainMenu from "@/components/MainMenu";
import { Box, VStack, Flex } from "@chakra-ui/react";
import Footer from "@/components/Footer";

export default function MainLayout() {
  return (
    <VStack minH="100vh" w="full" spacing={0}>
      <Box w="full" h="100px">
        <TopBar />
      </Box>

      <Flex w="full" flex={1} gap={4}>
        <Box flex={1}>
          <MainMenu />
        </Box>
        <Box flex={6}>
          <Outlet />
        </Box>
      </Flex>

      <Footer />
    </VStack>
  );
}
