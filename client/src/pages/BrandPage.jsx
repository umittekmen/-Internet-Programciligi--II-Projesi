import { useParams } from "react-router-dom";
import data from "../utils/data/data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardBody,
    Flex,
    Link as ChakraLink,
    Image,
    Heading,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import Header from "./components/Header";
import Atropos from "atropos/react";

const BrandPage = () => {
    const { brandName } = useParams();
    const [modelsData, setModelsData] = useState([]);

    useEffect(() => {
        const findBrand = data?.brands?.brand?.find(
            (brand) => brand.name._text === brandName
        );

        if (findBrand) {
            const models = findBrand.models?.model || [];
            setModelsData(models);
        }
    }, [brandName]);


    return (
        <>
            <Header />
            <Grid
                p={"1rem"}
                templateRows="repeat(5, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap="1rem"
            >
                {modelsData.map((model, index) => (
                    <GridItem key={index}>
                        <Atropos
                            style={{ height: "100%" }}
                            options={{
                                duration: 800,
                                shadow: true,
                            }}
                        >
                            <ChakraLink
                                as={Link}
                                to={`/brand/${brandName}/${model.name?._text}`}
                                _hover={{ textDecoration: "none" }}
                            >
                                <Card h={"100%"} borderRadius="lg" border="2px solid gray" height={""} >
                                    <CardHeader>
                                        <Heading data-atropos-offset="5">{model.name?._text}</Heading>
                                    </CardHeader>
                                    <CardBody pt={"0px"}  >
                                        <Flex flexDir={"column"} gap={"1rem"} >
                                            {model.generations?.generation?.images?.image[0]?.big?._text ? (
                                                <Image src={model.generations?.generation?.images?.image[0]?.big?._text} data-atropos-offset="5" />
                                            ) : (
                                                (model.name?._text === "G") ? (
                                                    <Image src={model.generations?.generation[0]?.images?.image[0]?.big?._text} data-atropos-offset="5" />
                                                ) : (

                                                    <p>Araba resmi bulunamadı.</p>
                                                )
                                            )}
                                        </Flex>
                                    </CardBody>
                                </Card>
                            </ChakraLink>
                        </Atropos>
                    </GridItem>
                ))}
            </Grid>
        </>
    );
};

export default BrandPage;
