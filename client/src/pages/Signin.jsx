import { useState, useContext, useEffect } from "react";
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
import logo from "../../public/cars/Car-accesories.gif";
import { signin } from "../utils/response/Auth";
import { MainContext } from "../utils/context/mainContext";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const toast = useToast();
  const { setIsLoggedIn, setAccountDetails, accountDetails } =
    useContext(MainContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await signin(userData);
      setUserData({ email: "", password: "" });
      setIsLoggedIn(true);
      toast({
        title: "Giriş",
        description: "Başarıyla giriş yapıldı.",
        status: "success",
        duration: 5000,
      });
      setAccountDetails(response.message);
    } catch (error) {
      toast({
        title: "Giriş",
        description: error.message,
        status: "error",
        duration: 5000,
      });
    }
  };

  useEffect(() => {
    if (accountDetails) {
      navigate(accountDetails.role === "admin" ? "/admin" : "/");
    }
  }, [accountDetails]);

  return (
    <Flex mt="25px" ml="120px">
      <Box>
        <img src={logo} alt="Giriş img" width="500px" height="60px" />
      </Box>
      <Box
        maxW="md"
        mx="auto"
        mt={8}
        p={8}
        borderWidth={1}
        borderRadius="lg"
        w="400px"
      >
        <Heading as="h2" size="lg" textAlign="center" mb={6}>
          Giriş Yap
        </Heading>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Email adresiniz"
            value={userData.email}
            name={"email"}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel>Şifre</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="Şifreniz"
            value={userData.password}
            onChange={handleChange}
          />
        </FormControl>
        <Button colorScheme="teal" width="full" mt={8} onClick={handleSubmit}>
          Giriş Yap
        </Button>
      </Box>
    </Flex>
  );
}

export default SignIn;
