import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import { useParams } from 'react-router-dom';

function ModelDetailsPage() {
    const { make, id } = useParams();
    const [modelDetails, setModelDetails] = useState(null);

    useEffect(() => {
        fetchData();
    }, [make, id]);

    const fetchData = () => {
        fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?refine.make=${make}&refine.id=${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(apiData => {
                // API'den gelen veriyi kontrol edelim
                console.log(apiData);
                // Eğer veri varsa, ilgili modelin detaylarını alalım
                if (apiData.results.length > 0) {
                    setModelDetails(apiData.results[0]);
                } else {
                    console.error('Model bulunamadı');
                }
            })
            .catch(error => {
                console.error('Veri alınamadı:', error);
            });
    };

    if (!modelDetails) {
        return <div>Model bilgileri yükleniyor...</div>;
    }

    return (
        <>
            <Header />
            <Box>
                <h1>{modelDetails.make} {modelDetails.model}</h1>
                <p>Yıl: {modelDetails.year}</p>
                <p>Fiyat: {modelDetails.price}</p>
                <p>Vites: {modelDetails.transmission}</p>
                {/* Diğer model detaylarını buraya ekleyin */}
            </Box>
        </>
    );
}

export default ModelDetailsPage;
