import React from 'react';
import CardClass from '../../components/pure/card.class';
import '../../css/card.class.show.css'

const CardClassShow = () => {
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
                    <button id='btnAdd'>Añadir Clases</button>
                </div>
                
            </div>
    );
}

export default CardClassShow;
