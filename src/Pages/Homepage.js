import React from 'react'
import {Container, Box, Text} from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from "../components/Login.js"
import SignUp from "../components/SignUp.js"
export const HomePage = () => {
  return (
    
      <Container maxW="xl" centerContent>
          <Box 
          display={"flex"}
          justifyContent="center"
          p={3}
          bg={'white'}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
          >
              <Text fontSize='4xl' fontFamily="Work Sans" color="black">Open-Up</Text>
          </Box>

          <Box bg="white" w='100%' p={4} borderRadius='lg' borderWidth="1px">

          <Tabs variant='soft-rounded'>
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <SignUp/>
            </TabPanel>
          </TabPanels>
          </Tabs>
          </Box>
      </Container>
  
  )
}

