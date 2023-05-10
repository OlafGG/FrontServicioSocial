import React from 'react';
import '../../css/class.card.css'

const CardClass = () => {
    return (
        <div className='body-principal-card'>
            <div className='div-title-card-class'>
                <label id='title-name-card-class'>Nombre de la clase</label>
            </div>
            <div className='lables-descriptions-class-card'>
                <label className='description-class-card'>-11:00</label>
                <label className='description-class-card'>-Gurpo 33</label>
                <label className='description-class-card'>-Martes - Jueves</label>
                <label className='description-class-card'>-D3</label>
                <label className='description-class-card'>-D2</label>
                <label className='description-class-card'>-D1</label>
            </div>
            
        </div>
    );
}

export default CardClass;
