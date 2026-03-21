import { Outlet } from "react-router-dom";
import TopBar from "@/components/TopBar";
import MainMenu from "@/components/MainMenu";
import { Box, VStack, Flex } from "@chakra-ui/react";
import Footer from "@/components/Footer";

export default function MainLayout() {
  return (
    <VStack h="100vh" w="full" spacing={0}>
      <Box w="full" h="100px" px={8} flexShrink={0}>
        <TopBar />
      </Box>

      <Flex w="full" flex={1} gap={4} px={8} overflow="hidden">
        <Box flex={1} overflowY="auto">
          <MainMenu />
        </Box>

        <Box flex={6} px={8} overflowY="auto">
          <Outlet />
        </Box>
      </Flex>

      <Footer />
    </VStack>
  );
}
