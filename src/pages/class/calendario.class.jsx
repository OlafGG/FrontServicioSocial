import React from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../../components/pure/calendary';
import '../../css/calendary.class.css'

const CalendarioClass = () => {

    const navigate  = useNavigate();

    return (
        <div id='Calendary-class-div-principal'>
            <div id='title-div-calendary'>
                <label id='title-class-edit-calendary'>Calendario</label>
            </div>
            <div id='title-teacher-class-edit'>
                <label id='title-position-class-calendary'>Nombre profe</label>
            </div>
            <div id='div-central-calendary'>
                <Calendar></Calendar>
            </div>
            <div id='buttons-end-model-class' onClick={() => navigate('/addcalendary')}>
                <button id='adding-element-class'>Añadir elemento</button>
            </div>
            
        </div>
    );
}

export default CalendarioClass;
