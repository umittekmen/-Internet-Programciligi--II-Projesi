import { useParams } from "react-router-dom";
import data from "./data/data.json";
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
    Box,
} from "@chakra-ui/react";
import Header from "./components/Header";
import Atropos from "atropos/react";

const ModelDetails = () => {
    const { modeldetail } = useParams();
    const [modelDetails, setModelDetails] = useState(null);

    useEffect(() => {
        // modeldetail parametresine göre ilgili modeli bul
        const model = data?.brands?.brand?.flatMap(brand => brand.models?.model).find(model => model.name._text === modeldetail);

        // Eğer model bulunduysa, detayları ayarla
        if (model) {
            setModelDetails(model);
        }
    }, [modeldetail]);

    // Model detaylarını kullanıcı arayüzünde göster
    return (
        <>
            <Header />
            {modelDetails && (
                <Grid p="1rem" templateColumns="1fr" gap="1rem">
                    <GridItem>
                        <Atropos
                            style={{ height: "100%" }}
                            options={{
                                duration: 800, // Animasyon süresi (ms cinsinden)
                                shadow: true, // Gölgelendirme etkinleştirme
                            }}
                        >
                            <Flex flexDirection="column">
                                <Heading>{modelDetails.brand} {modelDetails.model}</Heading>
                                <Card h="100%" borderRadius="lg" border="2px solid gray">
                                    <CardBody>
                                        <Flex flexWrap="wrap" gap="1rem">
                                            {modelDetails.generations?.generation?.images?.image.map((image, index) => (
                                                <div key={index} style={{ width: "400px" }}>
                                                    <Image src={modelDetails.name._text === "G" ? image.small?._text : image.big?._text} />
                                                </div>
                                            ))}
                                        </Flex>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <Heading>Modifications</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Flex flexWrap="wrap" gap="1rem">
                                            {modelDetails.modifications?.modification?.map((modification, index) => (
                                                <Box key={index} borderWidth="1px" borderRadius="lg" p="1rem">
                                                    <Box>ID: {modification.id?._text}</Box>
                                                    <Box>Brand: {modification.brand?._text}</Box>
                                                    <Box>Model: {modification.model?._text}</Box>
                                                    <Box>Generation: {modification.generation?._text}</Box>
                                                    <Box>Doors: {modification.doors?._text}</Box>
                                                    <Box>Power: {modification.power?._text} hp</Box>
                                                    <Box>Tank Volume: {modification.tankVolume?._text} litre</Box>
                                                </Box>
                                            ))}
                                        </Flex>
                                    </CardBody>
                                </Card>
                            </Flex>
                        </Atropos>
                    </GridItem>
                </Grid>
            )}
        </>
    );
};

export default ModelDetails;
