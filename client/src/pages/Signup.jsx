import React, { useState } from 'react';
import {
    Button,
    Flex,
    Box,
    Center,
    Heading,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import logo from "./components/car-signin.gif";

const Signup = () => {
    // Kullanıcı bilgilerini tutacak state
    const [register, setRegister] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setRegister({
            ...register,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Kayıt işlemleri burada gerçekleştirilecek
    };

    return (
        <>
            <Box>
                <Flex mt={100} ml={120} justify="center" align="center">
                    <Box>
                        <img src={logo} alt="kayıt Logo" width={500} height={60} />
                    </Box>
                    <Box maxW="md" mt={8} p={8} borderWidth={1} borderRadius="lg" w={400}>
                        <Heading as="h2" size="lg" textAlign="center" mb={6}>
                            Kayıt ol
                        </Heading>

                        <form onSubmit={handleSubmit}>
                            <FormControl id="username" isRequired>
                                <FormLabel>Kullanıcı Adı</FormLabel>
                                <Input type="text" placeholder="Kullanıcı Adınız" onChange={handleInputChange} />
                            </FormControl>
                            <FormControl id="email" isRequired mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder="Email adresiniz" onChange={handleInputChange} />
                            </FormControl>

                            <FormControl id="password" isRequired mt={4}>
                                <FormLabel>Şifre</FormLabel>
                                <Input type="password" placeholder="Şifreniz" onChange={handleInputChange} />
                            </FormControl>

                            <Button type="submit" colorScheme="teal" width="full" mt={6}>
                                Kayıt ol
                            </Button>
                        </form>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default Signup;
