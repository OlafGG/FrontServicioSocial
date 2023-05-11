import React from 'react';
import '../../css/class.card.css'

const CardClass = ({card}) => {
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
            <div className='divbuttons-class-cards'>
                <button id='trash-icon-class' className='options-config-class-card'><i style={{fontSize: '140%'}} class="bi bi-trash3-fill"></i></button>
                <button className='options-config-class-card'><i style={{fontSize: '140%'}} class="bi bi-card-text"></i></button>
                <button className='options-config-class-card'><i style={{fontSize: '140%'}} class="bi bi-front"></i></button>
            </div>
            </div>
            
            
        </div>
    );
}

export default CardClass;
