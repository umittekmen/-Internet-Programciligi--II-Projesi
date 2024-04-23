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
import logo from "./components/car-signin.gif"


function Signup() {
    return (
        <>
            <Box>
                <Flex mt={"100px"} ml={"120px"} >
                    <Box>
                        <img src={logo} alt="kayıt Logo" width={"500px"} height={"60px"} />
                    </Box>
                    <Box maxW="md" mx="auto" mt={8} p={8} borderWidth={1} borderRadius="lg" w={"400px"}>
                        <Heading as="h2" size="lg" textAlign="center" mb={6}>
                            Kayıt ol
                        </Heading>

                        <FormControl id="nickname" isRequired>
                            <FormLabel>Kullanıcı Adı</FormLabel>
                            <Input type="text" placeholder="Kullanıcı Adınız" />
                        </FormControl>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="Email adresiniz" />
                        </FormControl>

                        <FormControl id="password" mt={4} isRequired>
                            <FormLabel>Şifre</FormLabel>
                            <Input type="password" placeholder="Şifreniz" />
                        </FormControl>

                        <Button colorScheme="teal" width="full" mt={6}>
                            Kayıt ol
                        </Button>


                    </Box>




                </Flex>





            </Box>
        </>









    )
} export default Signup