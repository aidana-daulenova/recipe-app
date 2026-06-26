import { Outlet } from "react-router-dom";
import TopBar from "@/components/TopBar";
import MainMenu from "@/components/MainMenu";
import { Box, Flex } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import { useUser } from "@/hooks/useUser";

export default function MainLayout() {
  const { user, removeUser } = useUser();

  return (
    <Flex direction="column" h="100vh" w="full" overflow="hidden">
      <Box w="full" flexShrink={0}>
        <TopBar user={user} onLogout={removeUser} />
      </Box>

      <Flex flex={1} w="full" gap={4} px={8} overflow="hidden">
        <Box flex={1} overflowY="auto">
          <MainMenu />
        </Box>

        <Box flex={6} px={3} overflowY="auto">
          <Outlet />
        </Box>
      </Flex>

      <Box flexShrink={0}>
        <Footer />
      </Box>
    </Flex>
  );
}
