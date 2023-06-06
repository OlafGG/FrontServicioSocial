import React from 'react';
import {useNavigate} from 'react-router-dom'
import '../../css/class.card.css'

const CardClass = ({card}) => {

const camino = useNavigate();

const navigateProps = (path) => {
        {camino(path);}
    }

    return (
        <div className='body-principal-card'>
            <div className='div-title-card-class' onClick={() => navigateProps('/classEditInfo')} >
                <label id='title-name-card-class'>Nombre de la clase</label>
            </div>
            <div className='lables-descriptions-class-card' onClick={() => navigateProps('/classEditInfo')}>
                <label className='description-class-card'>-11:00</label>
                <label className='description-class-card'>-Gurpo 33</label>
                <label className='description-class-card'>-Martes - Jueves</label>
                <label className='description-class-card'>-D3</label>
                <label className='description-class-card'>-D2</label>
                <label className='description-class-card'>-D1</label>
            </div>
            <div className='divbuttons-class-cards'>
                <button id='trash-icon-class' className='options-config-class-card'><i style={{fontSize: '140%'}} class="bi bi-trash3-fill"></i></button>
                <button className='options-config-class-card'><i style={{fontSize: '140%'}} class="bi bi-card-text"></i></button>
                <button className='options-config-class-card'><i style={{fontSize: '140%'}} class="bi bi-front"></i></button>
            </div>
           
            
            
        </div>
    );
}

export default CardClass;
