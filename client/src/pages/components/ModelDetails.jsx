import { useParams } from "react-router-dom";
import data from "../../utils/data/data.json";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Flex,
  Image,
  Heading,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";
import Header from "./Header";
import Atropos from "atropos/react";
import { px } from "framer-motion";

const ModelDetails = () => {
  const { modeldetail } = useParams();
  const [modelDetails, setModelDetails] = useState(null);

  const keyToTurkishLabel = {
    brand: "Marka",
    model: "Model",
    doors: "Kapı Sayısı",
    power: "Motor Gücü(hp)",
    powerHp: "Motor Gücü (Hp)",
    tankVolume: "Yakıt Deposu(Litre)",
    modelYear: "Model Yılı",
    length: "Uzunluk(mm)",
    width: "Genişlik(mm)",
    height: "Yükseklik(mm)",
    approachAngle: "Geliş Açısı(m)",
    departureAngle: "Ayrılma Açısı(m)",
    luggageMin: "Bagaj Hacmi(Litre)",
    engineCode: "Motor Kodu",
    engineposition: "Motor Konumu",
    engineDisplacement: "Motor Hacmi",
    maxEngineSpeed: "Maksimum Motor Hızı(rpm)",
    torque: "Tork(Nm)",
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
    fuelConsumptionCombined: "Ortalama Yakıt Tüketimi(Litre)",
    emissionStandard: "Emisyon Standardı",
    curbWeight: "Boş Ağırlık(kg)",
    maxWeight: "Maksimum Ağırlık(kg)",
    tireSize: "Lastik Boyutu(mm)",
    rimsSize: "Jant Boyutu",
    maxspeed: "Maksimum Hız",
    acceleration: "0-100 km/h Hızlanma",
    powerRpm: "Maksimum devir(rpm)",
    powerRpmLow: "Minimum devir(rpm)",
    powerRpmHigh: "Maksimum Devir Gücü(rpm)",
    doorsmin: "minimum kapı sayısı",
    coupe: "Kasa Tipi",
    places: "Koltuk sayısı",
    rideHeight: "Sürüş Yüksekliği",
    rideHeightMin: "Minimum Sürüş Yükseklği",
    heightMin: "Minimum Yükseklik",
    approachAngleMin: "Yaklaşma Açısı",
    departureAngleMin: "Kalkış Açısı",
    luggageMinMin: "Minumum Bagaj Hacmi",
    torqueRpmLow: "Düşük Tork Devri",
    frontBrakesSize: "Ön Fren Boyutu (mm)",
    frontBrakesThickness: "Ön Fren Kalınlığı(mm)",
    rearBrakesSize: "Arka Fren Boyutu (mm)",
    rearBrakesThickness: "Arka Fren Kalınlığı(mm)",
    fuelConsumptionUrban: "Şehir içi Yakıt Tüketimi(Litre)",
    fuelConsumptionUrbanMin: "Şehir içi Minimum Yakıt Tüketimi(Litre)",
    fuelConsumptionExtraurban: "Şehir Dışı Yakıt Tüketimi(Litre)",
    fuelConsumptionExtraurbanMin: "Şehir Dışı Minimum Yakıt Tüketimi(Litre)",
    fuelConsumptionCombined: "Ortalama Yakıt Tüketimi(Litre)",
    fuelConsumptionCombinedMin: "Ortalama  Minimum Yakıt Tüketimi(Litre)",
    curbWeightMin: "Boş Ağırlık(kg)",
  };

  useEffect(() => {
    const models = data?.brands?.brand?.reduce((acc, brand) => {
      return acc.concat(brand.models?.model || []);
    }, []);

    const model = models.find((model) => model.name._text === modeldetail);

    if (model) {
      setModelDetails(model);
    }
  }, [modeldetail]);

  const renderModificationDetails = (modification) => {
    const motorInfoKeys = [
      "power",
      "powerHp",
      "torque",
      "torqueNm",
      "maxEngineSpeed",
      "fuelSystem",
      "turbine",
      "valvetrain",
      "fuel",
      "drive",
      "gearboxAT",
      "gearboxATType",
    ];
    const motorInfo = [];
    const otherInfo = [];

    Object.keys(modification).forEach((key) => {
      if (
        key === "id" ||
        key === "update" ||
        key === "brand" ||
        key === "model" ||
        key === "generation"
      ) {
        return;
      }

      const value = modification[key]?._text;
      const label =
        keyToTurkishLabel[key] ||
        key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());

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
        <Grid
          p="1rem"
          templateColumns="1fr"
          gap="1rem"
          margin={"auto"}
          w={"1300px"}
        >
          <GridItem>
            <Atropos
              style={{ height: "100%" }}
              activeOffset={40}
              shadowScale={1.05}
            >
              <Flex flexDirection="column">
                <Heading mb={"15px"}>{modelDetails.name._text}</Heading>
                <Card
                  h="100%"
                  borderRadius="lg"
                  border={"3px solid"}
                  borderStyle={"dashed"}
                  borderColor={"#696969"}
                >
                  <CardBody>
                    <Flex flexWrap="wrap" gap="1rem">
                      {modelDetails.generations?.generation?.images?.image.map(
                        (image, index) => (
                          <Box key={index} style={{ width: "400px" }}>
                            <Image
                              src={image.big?._text}
                              alt={`Image ${index + 1}`}
                            />
                          </Box>
                        )
                      )}
                    </Flex>
                  </CardBody>
                </Card>
                <Card
                  border="3px solid "
                  borderRadius="lg"
                  mt="50px"
                  borderStyle={"dashed"}
                  borderColor={"#696969"}
                >
                  <CardBody>
                    <Flex flexWrap="wrap" gap="1rem">
                      {modelDetails.generations?.generation?.modifications?.modification?.map(
                        (modification, index) => {
                          const { motorInfo, otherInfo } =
                            renderModificationDetails(modification);
                          return (
                            <Box
                              key={index}
                              borderWidth="1px"
                              borderRadius="lg"
                              p="1rem"
                              mb="1rem"
                              w={"600px"}
                            >
                              <Heading size="md">Motor Bilgileri</Heading>
                              {motorInfo}
                              <Heading size="md" mt="1rem">
                                Diğer Bilgiler
                              </Heading>
                              {otherInfo}
                            </Box>
                          );
                        }
                      )}
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
