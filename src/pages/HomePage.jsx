import { Box, Card, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import logo from "./components/cars/Audi_logo.png";

function HomePage() {
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);

    return (
        <>
            <Header />
            <Flex mt={"25px"} ml={"60px"} mr={"60px"} h={"auto"} borderColor={"00BFFF"} border={"2px solid"} borderStyle={"dashed"} flexWrap={"wrap"} >
                <Box mt={"120px"} display="flex" justifyContent="center" w={"320px"} h={"200px"} m={"15px"}>
                    <Card
                        as={Link}
                        to={"/cars"}
                        border={"2px solid"}
                        w={"400px"}
                        h={"200px"}
                        position="relative"
                        onMouseEnter={() => setHovered1(true)}
                        onMouseLeave={() => setHovered1(false)}
                    >
                        <img src={logo} alt="" style={{ width: "100%", height: "100%" }} m={"15px"} />
                        {hovered1 && (
                            <Box
                                position="absolute"
                                top={0}
                                left={0}
                                right={0}
                                bottom={0}
                                bg="rgba(0, 0, 0, 0.05)"
                                sx={{ backdropFilter: "blur(8px)" }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Audi bir Alman Markasıdır
                            </Box>
                        )}
                    </Card>
                </Box>
                <Box mt={"120px"} display="flex" justifyContent="center" w={"320px"} h={"200px"} m={"15px"}>
                    <Card
                        as={Link}
                        to={"/Girisyap"}
                        border={"2px solid"}
                        w={"340px"}
                        h={"200px"}
                        position="relative"
                        onMouseEnter={() => setHovered2(true)}
                        onMouseLeave={() => setHovered2(false)}
                    >
                        {hovered2 && (
                            <Box
                                position="absolute"
                                top={0}
                                left={0}
                                right={0}
                                bottom={0}
                                bg="rgba(0, 0, 0, 0.05)"
                                sx={{ backdropFilter: "blur(8px)" }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                Alfa Romeo
                            </Box>
                        )}
                    </Card>
                </Box>
            </Flex >
        </>
    );
}

export default HomePage;
