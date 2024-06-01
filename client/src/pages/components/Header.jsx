import React, { useState, useEffect, useContext } from "react";
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
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../../public/cars/site-logo.jpg";
import { Link } from "react-router-dom";
import { MainContext } from "../../utils/context/mainContext";

function Header() {
  const toast = useToast();
  const { isLoggedIn, accountDetails, setIsLoggedIn } = useContext(MainContext);

  const handleLogout = async () => {
    try {
      setIsLoggedIn(false);
      toast({
        title: "Çıkış",
        description: "Başarıyla çıkış yapıldı.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Çıkış başarısız oldu:", error);
      toast({
        title: "Hata",
        description: "Çıkış işlemi başarısız oldu.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    // Kullanıcı adı kontrolü burada yapılabilir
  }, []);

  return (
    <>
      <Box bg="#696969" w="100%" p={4} color="white">
        <Flex justify="space-between" align="center">
          <img src={logo} alt="Site Logo" width={"100px"} height={"60px"} />
          <Heading as="h1" size="md" w={"200px"}>
            Araç Atlası
          </Heading>
          <Flex
            display={{ base: "none", md: "flex" }}
            justify={"center"}
            w={"100%"}
          >
            {/* Ana sayfa, Hakkımızda ve İletişim bağlantıları */}
            <Button
              as={Link}
              to="/"
              variant="ghost"
              colorScheme="whiteAlpha"
              mr={4}
              color={"white"}
            >
              Ana Sayfa
            </Button>
            <Button
              as={Link}
              to="/about-us"
              variant="ghost"
              colorScheme="whiteAlpha"
              mr={4}
              color={"white"}
            >
              Hakkımızda
            </Button>
            <Button
              as={Link}
              to="/contact"
              variant="ghost"
              colorScheme="whiteAlpha"
              mr={4}
              color={"white"}
            >
              İletişim
            </Button>
          </Flex>
          <Spacer />
          <Flex>
            {/* Kullanıcı girişi yapıldıysa kullanıcının adını ve çıkış yap butonunu göster, aksi halde Giriş Yap ve Kayıt Ol düğmelerini göster */}
            {isLoggedIn ? (
              <>
                <Button colorScheme="whiteAlpha" bg={"#00BFFF"} mr={4}>
                  {accountDetails?.name}
                </Button>
                <Button
                  onClick={handleLogout}
                  colorScheme="whiteAlpha"
                  ml={4}
                  bg={"#00BFFF"}
                >
                  Çıkış Yap
                </Button>
              </>
            ) : (
              <>
                {/* Giriş yap butonuna tıklandığında Giriş Yap sayfasına yönlendir */}
                <Button
                  as={Link}
                  to="/login"
                  colorScheme="whiteAlpha"
                  bg={"#00BFFF"}
                >
                  Giriş Yap
                </Button>
                <Button
                  as={Link}
                  to="/signup"
                  colorScheme="whiteAlpha"
                  ml={4}
                  bg={"#00BFFF"}
                >
                  Kayıt Ol
                </Button>
              </>
            )}
          </Flex>
          <Flex display={{ base: "flex", md: "none" }}>
            {/* Mobil cihazlar için menü */}
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                colorScheme="whiteAlpha"
              />
              <MenuList bg="blue.500" color={"black"}>
                {/* Ana sayfa, Hakkımızda ve İletişim bağlantıları */}
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
                {/* Kullanıcı girişi yapıldıysa Çıkış Yap, aksi halde Giriş Yap ve Kayıt Ol düğmeleri */}
                {isLoggedIn ? (
                  <MenuItem onClick={handleLogout}>Çıkış Yap</MenuItem>
                ) : (
                  <>
                    <MenuItem as={Link} to="/login">
                      Giriş Yap
                    </MenuItem>
                    <MenuItem as={Link} to="/signup">
                      Kayıt Ol
                    </MenuItem>
                  </>
                )}
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
