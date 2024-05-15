import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import { Link } from 'react-router-dom';
import data from './data/data.json'
function CarsPage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(apiData => {
                setData(apiData.results);
            })
            .catch(error => {
                console.error('Veri alınamadı:', error);
            });
    };

    if (!data) {
        return <div>Veri yükleniyor...</div>;
    }

    return (
        <>
            <Header />
            <Box>
                <Box>Markalar</Box>

                <ul>
                    {data.map(vehicle => (
                        <li key={vehicle.make}>
                            {/* Her marka için Link component'ini kullanarak marka ismine tıklandığında ilgili model sayfasına yönlendirme yapıyoruz */}
                            <Link to={`/models/${vehicle.make}`}>{vehicle.make}</Link>
                        </li>
                    ))}
                </ul>
            </Box>
        </>
    );
}

export default CarsPage;
