import React, { useEffect } from 'react';
import {
    Box,
} from "@chakra-ui/react";
import Header from "./components/Header";

const mesaj = () => {
    const messageBoxes = document.querySelectorAll("#box");
    messageBoxes.forEach((messageBox) => {
        messageBox.textContent = "Bu bir web sitesidir";
    });
}

const AboutUs = () => {
    useEffect(() => {
        mesaj();
    }, []);

    return (
        <>
            <Header />
            <Box id="box">

            </Box>
        </>
    );
};

export default AboutUs;
