import React from 'react';
import {
    Button,
    Flex,
    Box,
    Spacer,

    Center,
    Heading,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import { Link as ChakraLink } from "@chakra-ui/react"
import Header from './components/Header';
import logo from "./components/Car-accesories.gif"


function Singin() {
    return (
        <>

            <Flex mt={"100px"} ml={"120px"} >
                <Box>
                    <img src={logo} alt="Giris img" width={"500px"} height={"60px"} />
                </Box>
                <Box maxW="md" mx="auto" mt={8} p={8} borderWidth={1} borderRadius="lg" w={"400px"} >
                    <Heading as="h2" size="lg" textAlign="center" mb={6}>
                        Giriş Yap
                    </Heading>

                    <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="Email adresiniz" />
                    </FormControl>

                    <FormControl id="password" mt={4} isRequired>
                        <FormLabel>Şifre</FormLabel>
                        <Input type="password" placeholder="Şifreniz" />
                    </FormControl>

                    <Button colorScheme="teal" width="full" mt={8}>
                        Giriş Yap
                    </Button>
                    {/* <ChakraLink href="" mt={4} textAlign="center" color="teal.500">
                        {" "}

                        Şifremi Unuttum
                    </ChakraLink> */}
                </Box>

            </Flex>








        </>
    )
} export default Singin