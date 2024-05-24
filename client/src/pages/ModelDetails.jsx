import { useParams } from "react-router-dom";
import data from "./data/data.json";
import { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    Flex,
    Image,
    Heading,
    Grid,
    GridItem,
    Box
} from "@chakra-ui/react";
import Header from "./components/Header";
import Atropos from "atropos/react";

const ModelDetails = () => {
    const { modeldetail } = useParams();
    const [modelDetails, setModelDetails] = useState(null);

    const keyToTurkishLabel = {
        brand: "Marka",
        model: "Model",
        doors: "Kapı Sayısı",
        power: "Motor Gücü",
        powerHp: "Motor Gücü (Hp)",
        tankVolume: "Yakıt Deposu",
        modelYear: "Model Yılı",
        length: "Uzunluk",
        width: "Genişlik",
        height: "Yükseklik",
        approachAngle: "Geliş Açısı",
        departureAngle: "Ayrılma Açısı",
        luggageMin: "Bagaj Hacmi",
        engineCode: "Motor Kodu",
        engineposition: "Motor Konumu",
        engineDisplacement: "Motor Hacmi",
        maxEngineSpeed: "Maksimum Motor Hızı",
        torque: "Tork",
        torqueNm: "Tork (Nm)",
        torqueRpm: "Tork (Devir)",
        fuelSystem: "Yakıt Sistemi",
        turbine: "Turbo",
        valvetrain: "Supap Düzeni",
        fuel: "Yakıt Türü",
        drive: "Çekiş",
        gearboxAT: "Şanzıman Vites Sayısı",
        gearboxATType: "Şanzıman Türü",
        frontSuspension: "Ön Süspansiyon",
        rearSuspension: "Arka Süspansiyon",
        frontBrakes: "Ön Frenler",
        rearBrakes: "Arka Frenler",
        abs: "ABS",
        standardFCc: "Yakıt Tüketim Standardı",
        fuelConsumptionCombined: "Ortalama Yakıt Tüketimi",
        emissionStandard: "Emisyon Standardı",
        curbWeight: "Boş Ağırlık",
        maxWeight: "Maksimum Ağırlık",
        tireSize: "Lastik Boyutu",
        rimsSize: "Jant Boyutu",
        maxspeed: "Maksimum Hız",
        acceleration: "0-100 km/h Hızlanma"
    };

    useEffect(() => {
        const models = data?.brands?.brand?.reduce((acc, brand) => {
            return acc.concat(brand.models?.model || []);
        }, []);

        const model = models.find(model => model.name._text === modeldetail);

        if (model) {
            setModelDetails(model);
        }
    }, [modeldetail]);

    const renderModificationDetails = (modification) => {
        const motorInfoKeys = ['power', 'powerHp', 'torque', 'torqueNm', 'maxEngineSpeed', 'fuelSystem', 'turbine', 'valvetrain', 'fuel', 'drive', 'gearboxAT', 'gearboxATType'];
        const motorInfo = [];
        const otherInfo = [];

        Object.keys(modification).forEach((key) => {
            if (key === 'id' || key === 'update' || key === 'brand' || key === 'model' || key === 'generation') {
                return;
            }

            const value = modification[key]?._text;
            const label = keyToTurkishLabel[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

            if (motorInfoKeys.includes(key)) {
                motorInfo.push(
                    <Box key={key}>
                        <strong>{label}:</strong> {value}
                    </Box>
                );
            } else {
                otherInfo.push(
                    <Box key={key}>
                        <strong>{label}:</strong> {value}
                    </Box>
                );
            }
        });

        return { motorInfo, otherInfo };
    };

    return (
        <>
            <Header />
            {modelDetails && (
                <Grid p="1rem" templateColumns="1fr" gap="1rem">
                    <GridItem>
                        <Atropos
                            style={{ height: "100%" }}
                            activeOffset={40}
                            shadowScale={1.05}
                        >
                            <Flex flexDirection="column">
                                <Heading>{modelDetails.name._text}</Heading>
                                <Card h="100%" borderRadius="lg" border="2px solid gray">
                                    <CardBody>
                                        <Flex flexWrap="wrap" gap="1rem">
                                            {modelDetails.generations?.generation?.images?.image.map((image, index) => (
                                                <div key={index} style={{ width: "400px" }}>
                                                    <Image src={image.big?._text} alt={`Image ${index + 1}`} />
                                                </div>
                                            ))}
                                        </Flex>
                                    </CardBody>
                                </Card>
                                <Card border="2px solid gray" borderRadius="lg" mt="4">
                                    <CardBody>
                                        <Flex flexWrap="wrap" gap="1rem">
                                            {modelDetails.generations?.generation?.modifications?.modification?.map((modification, index) => {
                                                const { motorInfo, otherInfo } = renderModificationDetails(modification);
                                                return (
                                                    <Box key={index} borderWidth="1px" borderRadius="lg" p="1rem" mb="1rem">
                                                        <Heading size="md">Motor Bilgileri</Heading>
                                                        {motorInfo}
                                                        <Heading size="md" mt="1rem">Diğer Bilgiler</Heading>
                                                        {otherInfo}
                                                    </Box>
                                                );
                                            })}
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
