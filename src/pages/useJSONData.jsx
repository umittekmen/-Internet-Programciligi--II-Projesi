import { useEffect, useState } from 'react';
import deneme from './data/data.json'

function useJSONData() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./data/data.json');
                if (!response.ok) {
                    throw new Error('Veri alınamadı');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();

        // Temizleme işlemi için return null
        return () => null;
    }, []);

    return { data, error };
}

export default useJSONData;
