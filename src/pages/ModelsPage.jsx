import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import { useParams, Link } from 'react-router-dom';

function ModelsPage() {
    const { make } = useParams();
    const [models, setModels] = useState([]);

    useEffect(() => {
        fetchData();
    }, [make]);

    const fetchData = () => {
        fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=20&refine.make=${make}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(apiData => {
                const filteredModels = apiData.results.filter(model => model.make === make);
                setModels(filteredModels);
            })
            .catch(error => {
                console.error('Veri alınamadı:', error);
            });
    };

    return (
        <>
            <Header />
            <Box>
                <h1>{make} Models</h1>
                <ul>
                    {models.map(model => (
                        <li key={model.id}>
                            <Link to={`/models/${make}/${model.id}`}>{model.model}</Link>
                        </li>
                    ))}
                </ul>
            </Box>
        </>
    );
}

export default ModelsPage;
