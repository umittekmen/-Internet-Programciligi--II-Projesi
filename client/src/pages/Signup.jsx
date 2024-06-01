import React, { useState, useContext } from "react";
import {
  Button,
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import logo from "../../public/cars/car-signin.gif";
import { signup } from "../utils/response/Auth";
import { MainContext } from "../utils/context/mainContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const toast = useToast();
  const { isLoggedIn, setIsLoggedIn, setAccountDetails } =
    useContext(MainContext);
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(register);
      setRegister({ name: "", email: "", password: "" });
      setIsLoggedIn(true);
      setAccountDetails(response.message);
      toast({
        title: "Kayıt",
        description: "Başarıyla kayıt olundu.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/"); // Başarılı kayıt sonrasında ana sayfaya yönlendirme
    } catch (error) {
      console.error("Kayıt Hatası:", error); // Hatayı konsola yazdır
      toast({
        title: "Kayıt",
        description: error.message || "Bilinmeyen bir hata oluştu.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Eğer kullanıcı zaten oturum açıkken, kayıt sayfasına erişirse,
  // Ana sayfaya yönlendirilmesi sağlanır.
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Box mt={"0px"}>
        <Flex mt={100} ml={120} justify="center" align="center">
          <Box marginRight={"200px"}>
            <img src={logo} alt="kayıt Logo" width={500} height={60} />
          </Box>
          <Box maxW="md" mt={8} p={8} borderWidth={1} borderRadius="lg" w={400}>
            <Heading as="h2" size="lg" textAlign="center" mb={6}>
              Kayıt ol
            </Heading>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Kullanıcı Adı</FormLabel>
                <Input
                  type="text"
                  placeholder="Kullanıcı Adınız"
                  value={register.name}
                  name="name"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Email adresiniz"
                  value={register.email}
                  name="email"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>Şifre</FormLabel>
                <Input
                  type="password"
                  placeholder="Şifreniz"
                  value={register.password}
                  name="password"
                  onChange={handleChange}
                />
              </FormControl>
              <Button colorScheme="teal" width="full" mt={8} type="submit">
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
