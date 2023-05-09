import React from 'react';
import '../../css/class.card.css'

const CardClass = () => {
    return (
        <div className='body-principal-card'>
            <div className='div-title-card-class'>
                <label id='title-name-card-class'>Nombre de la clase</label>
            </div>
            <div className='lables-descriptions-class-card'>
                <label className='description-class-card'>D6</label>
                <label className='description-class-card'>D5</label>
                <label className='description-class-card'>D4</label>
                <label className='description-class-card'>D3</label>
                <label className='description-class-card'>D2</label>
                <label className='description-class-card'>D1</label>
            </div>
            
        </div>
    );
}

export default CardClass;
