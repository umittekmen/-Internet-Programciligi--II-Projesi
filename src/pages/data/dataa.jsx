import { useEffect, useState } from 'react';
import xmlData from '../data/data.xml'; // XML verisini içe aktar

function useXMLData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // XML verisini işleme
        setData(xmlData);
    }, []);

    return data;
}

export default useXMLData;
