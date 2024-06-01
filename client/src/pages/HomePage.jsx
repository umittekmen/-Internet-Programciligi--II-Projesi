import { useEffect } from "react";
import data from "../utils/data/data.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import Atropos from "atropos/react";
import Header from "./components/Header";
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

function HomePage() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    setJsonData(data.brands.brand);
  }, []);

  return (
    <>
      <Header />
      <Grid
        p={"1rem"}
        templateRows="repeat(5, 1fr)" // 5 satır oluştur
        templateColumns="repeat(5, 1fr)" // 5 sütun oluştur
        gap="1.5rem"
        margin={"auto"}
        w={"1300px"}
        mt={"25px"}
      >
        {jsonData?.map((car, index) => (
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
                to={`/brand/${car.name?._text}`}
                _hover={{ textDecoration: "none" }}
              >
                <Card h={"100%"} borderRadius="lg" border="2px solid gray">
                  <CardHeader>
                    <Heading data-atropos-offset="5">{car.name?._text}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Flex flexDir={"column"} gap={"1rem"}>
                      <Image src={car.image?._text} data-atropos-offset="7" />
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
}

export default HomePage;
