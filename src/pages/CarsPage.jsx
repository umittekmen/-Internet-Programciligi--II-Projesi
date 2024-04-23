// CarsPage.jsx

import { Box } from '@chakra-ui/react'; // Örnek olarak Box bileşenini içe aktardık
import Header from './components/Header'; // Header bileşenini içe aktardık
import useXMLData from './useXMLData'; // useXMLData hook'unu içe aktardık

function CarsPage() {
    const data = useXMLData(); // Veriyi alma

    if (!data) {
        return <div>Veri yükleniyor...</div>;
    }

    return (
        <>
            <Header />
            <Box>
                <h1>Brands</h1>
                <ul>
                    {data.brands.brand.map(brand => (
                        <li key={brand.id._text}>{brand.name._text}</li>
                    ))}
                </ul>
            </Box>

        </>
    )
}

export default CarsPage;
