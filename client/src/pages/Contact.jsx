import React, { useEffect } from "react";
import { Box, Center } from "@chakra-ui/react";
import Header from "./components/Header";

const Contact = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <Center
        m={"auto"}
        w={"1000px"}
        mt={"25px"}
        fontSize={"45px"}
        border={"3px solid Gray"}
      >
        Kayseri Üniversitesi
        <br /> Bilgisayar Programcılığı <br /> 2.Sınıf Projesi
        <br />
        Muhammet Ümit TEKMEN 223010710036 <br />
        223010710036@kayseri.edu.tr
      </Center>
    </>
  );
};

export default Contact;
