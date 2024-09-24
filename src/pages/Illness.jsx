import React, { useContext, useEffect, useState } from 'react';
import translation from '../translations/translation.json';
import { LanguageContext } from '../contexts/LanguageContext';
import data from '../data/data.json';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';


const Illness = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const t = translation[language];

    const { id } = useParams();
    const [illnessesId, setIllnessesId] = useState([]);

    useEffect(() => {
        const ids = data.illnesses.map((item) => item.id);
        setIllnessesId(ids);
    }, []);

    const illnessId = Number(id);

    return (
        <>
            { illnessesId.includes(illnessId) ? (
                <div className="container mx-auto">
                    <h1>Illness ID: {illnessId}</h1>
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
}

export default Illness;