import React from 'react';
import '../../css/card.class.show.revisions.css'

const CardClassShowRevisions = ({nombre, grupo, carrera}) => {
    return (
        <div id='class-div-card-show-revisions'>
            <div id='title-data-info-card'>
                <label id='label-nombre-show'>{nombre}</label>
            </div>
            <div id='data-info-card-show'>
                <input id='checkbox-group' type='checkbox'></input>
                <label id='label-grupo-show'>{grupo}</label>
                <label id='label-carrera-show'>{carrera}</label>
            </div>
        </div>
    );
}

export default CardClassShowRevisions;
