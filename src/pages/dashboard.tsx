import { Flex, SimpleGrid, Box, Text } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";

export default function Dashboard () {
    return (
        <Flex direction="column" h="100vh"> 
            <Header />

            <Flex w="100%" maxWidth={1480} mx="auto" px="6">
                <SideBar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start"> 

                    <Box p="8" bg="gray.800" borderRadius={8} minHeight="340px">
                        <Text fontSize="lg" mb="4">Inscritos da semana</Text>
                    </Box>

                    <Box p="8" bg="gray.800" borderRadius={8} minHeight="340px">
                        <Text fontSize="lg" mb="4">Taxa de Abertura</Text>
                    </Box>

            
                </SimpleGrid>
            </Flex>
        </Flex>
        
    )
}