import React from "react";
import {
    Box,
    Flex,
    Heading,
    Button,
    IconButton,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../components/site-logo.jpg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <Box bg="#696969" w="100%" p={4} color="white">
                <Flex justify="space-between" align="center">
                    <img src={logo} alt="Site Logo" width={"100px"} height={"60px"} />
                    <Heading as="h1" size="md" w={"200px"}>
                        Araç Atlası
                    </Heading>
                    <Flex display={{ base: "none", md: "flex" }} justify={"center"} w={"100%"}>
                        <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha" mr={4} color={"white"}>
                            Ana Sayfa
                        </Button>
                        <Button as={Link} to="/Hakkımızda" variant="ghost" colorScheme="whiteAlpha" mr={4} color={"white"}>
                            Hakkımızda
                        </Button>
                        <Button as={Link} to="/Iletisim" variant="ghost" colorScheme="whiteAlpha" mr={4} color={"white"}>
                            İletişim
                        </Button>
                    </Flex>
                    <Spacer />
                    <Flex display={{ base: "none", md: "flex" }}>
                        <Button as={Link} to="/Girisyap" colorScheme="whiteAlpha" bg={"#00BFFF"}>
                            Giriş Yap
                        </Button>
                        <Button as={Link} to="/kayıtol" colorScheme="whiteAlpha" ml={4} bg={"#00BFFF"}>
                            Kayıt Ol
                        </Button>
                    </Flex>
                    <Flex display={{ base: "flex", md: "none" }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={<HamburgerIcon />}
                                variant="outline"
                                colorScheme="whiteAlpha"
                            />
                            <MenuList bg="blue.500" color={"black"}>
                                <MenuItem as={Link} to="/">
                                    Ana Sayfa
                                </MenuItem>
                                <MenuItem as={Link} to="/Hakkımızda">
                                    Hakkımızda
                                </MenuItem>
                                <MenuItem as={Link} to="/Iletisim">
                                    İletişim
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem as={Link} to="/Girisyap">
                                    Giriş Yap
                                </MenuItem>
                                <MenuItem as={Link} to="/kayıtol">
                                    Kayıt Ol
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Box>
            <Box></Box>
        </>
    );
}

export default Header;
