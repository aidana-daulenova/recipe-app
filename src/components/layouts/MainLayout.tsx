import { Outlet } from "react-router-dom";
import TopBar from "@/components/TopBar";
import MainMenu from "@/components/MainMenu";
import { Box, VStack, Flex } from "@chakra-ui/react";
import Footer from "@/components/Footer";

export default function MainLayout() {
  return (
    <Flex direction="column" h="100vh" w="full" overflow="hidden">
      {/* TopBar */}
      <Box w="full" h="100px" flexShrink={0}>
        <TopBar />
      </Box>

      {/* Main content */}
      <Flex flex={1} w="full" gap={4} px={8} overflow="hidden">
        {/* Sidebar */}
        <Box flex={1} overflowY="auto">
          <MainMenu />
        </Box>

        {/* Main content */}
        <Box flex={6} px={8} overflowY="auto">
          <Outlet />
        </Box>
      </Flex>

      {/* Footer */}
      <Box flexShrink={0}>
        <Footer />
      </Box>
    </Flex>
  );
}
