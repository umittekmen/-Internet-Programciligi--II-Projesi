import { useEffect, useState } from 'react';
import jsonData from './data/data.json'; // JSON verisi

function useXMLData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // JSON dosyasından veriyi alma işlemi
        fetch('./data/data.json')
            // Örnek olarak, verinin bulunduğu yolu belirtiyoruz
            .then(response => response.json())
            .then(data => {
                // Veriyi alırken gerekli işlemleri yapabiliriz
                setData(data);
            })
            .catch(error => {
                // Hata durumunda gerekli işlemleri yapabiliriz
                console.error('Veri alınamadı:', error);
            });

        // Temizleme işlemi için return null
        return () => null;
    }, []);

    return data;
}

export default useXMLData;
