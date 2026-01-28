import { Outlet } from "react-router-dom"
import TopBar from "@/components/TopBar"
import MainMenu from "@/components/MainMenu"
import { Box, VStack, Flex } from "@chakra-ui/react"

function MainLayout() {
  return (
    <VStack spacing={4} w="full" h="100vh" p={3}>
      <Box w="full" h="100px">
        <TopBar />
      </Box>
      
      <Flex w="full" flex={1} gap={4}>
        <Box flex={1} >
          <MainMenu />
        </Box>
        <Box flex={3} >
          <Outlet />
        </Box>
      </Flex>
    </VStack>
  )
}

export default MainLayout