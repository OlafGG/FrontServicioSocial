import React from 'react';
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import CardClass from '../../components/pure/card.class';
import '../../css/card.class.show.css'

const CardClassShow = () => {

    const [materias, setmaterias] = useState(null);

    useEffect(() => {
        const fechData = async () => {
            const response = await fetch('http://localhost:8000/api/materias/')
            const data = await response.json()
            setmaterias(data.message)
        };
        
        fechData()
    }, []);

    const navigate  = useNavigate()

    const navigateMove = (path) => {
        navigate({
            pathname: path,
        });
    }


    return (
        <div className='principal2'>
                <div className='mis-clases-label titulo'>
                    <label>Mis clases</label>
                </div>
                <div className='mis-clases-label nombre-maestro'>
                    <label>{/*user.name*/}Juan</label>
                </div>
                
                <div className='fondo-numero-2'>
                {
                    materias ? 
                    materias.map(materia => <CardClass card={materia}></CardClass>) : ''
                }
                    
                </div>
                <div id='btnAdding'>
                    <button id='btnAdd' onClick={() => navigateMove('/addClass')}>Añadir Clases</button>
                </div>
                
            </div>
    );
}

export default CardClassShow;
