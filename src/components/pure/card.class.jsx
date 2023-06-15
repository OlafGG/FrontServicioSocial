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
        {
            console.log(card)
        }
            <div className='div-title-card-class' onClick={() => navigateProps('/classEditInfo')} >
                <label id='title-name-card-class'>{card.materia_name}</label>
            </div>
            <div className='lables-descriptions-class-card' onClick={() => navigateProps('/classEditInfo')}>
                <label className='description-class-card'>-{card.materia_caracteristica_1}</label>
                <label className='description-class-card'>-{card.materia_caracteristica_2}</label>
                <label className='description-class-card'>-{card.materia_caracteristica_3}</label>
                <label className='description-class-card'>-{card.materia_caracteristica_4}</label>
                <label className='description-class-card'>-{card.materia_caracteristica_5}</label>
                <label className='description-class-card'>-{card.materia_caracteristica_6}</label>
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
