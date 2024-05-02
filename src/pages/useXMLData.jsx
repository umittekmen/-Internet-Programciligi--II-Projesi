import { useEffect, useState } from 'react';
import jsonData from './data/data.json'; // JSON verisi

function useXMLData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // JSON dosyasından veriyi alma işlemi
        fetch('./data/data.json')

            .then(response => response.json())
            .then(data => {

                setData(data);
            })
            .catch(error => {

                console.error('Veri alınamadı:', error);
            });

        // Temizleme işlemi için return null
        return () => null;
    }, []);

    return data;
}

export default useXMLData;
