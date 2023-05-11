import axios from 'axios';
import React from 'react';
import {useEffect, useState} from 'react';
import CardClass from '../pure/card.class';


const ClassList = ({}) => {

    const [cardClass, setCardClass] = useState(dataCalling());

    useEffect(() => {
        return () => {
            
        };
    }, [cardClass]);

    async function dataCalling () {
        //const data = await axios.get('http://localhost/api/materias');
        const data = 3;
        return data;
    }

    return (
        <div>
            {cardClass.map((card, index) => {
                return(
                    <CardClass
                    key={index}
                    card={card}
                    ></CardClass>
                )
            })}
            
        </div>
    );
}

export default ClassList;
