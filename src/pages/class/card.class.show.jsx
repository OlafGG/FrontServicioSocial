import React from 'react';
import {useNavigate} from 'react-router-dom'
import CardClass from '../../components/pure/card.class';
import '../../css/card.class.show.css'

const CardClassShow = () => {



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
                    {/*<EditInfoClass></EditInfoClass>*/}
                    <CardClass></CardClass>
                </div>
                <div id='btnAdding'>
                    <button id='btnAdd' onClick={() => navigateMove('/addClass')}>Añadir Clases</button>
                </div>
                
            </div>
    );
}

export default CardClassShow;
