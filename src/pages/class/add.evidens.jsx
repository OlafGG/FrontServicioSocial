import React from 'react';
import '../../css/add.evidence.css'

const AddEvidens = () => {
    return (
        <div id='adding-evidens-principal'>
            <div id='title-adding-evidence'>
                <label id='title-label-adding-evidence'>Agregando evidencia</label>
                <label id='type-evidence-label'>¿Que tipo de evidencia deseas agregar?</label>
            </div>            
            <div id='buttons-adding-evidence'>
                <button className='button-adding-evidence'>Actividad</button>
                <button className='button-adding-evidence'>Tarea</button>
                <button className='button-adding-evidence'>Proyecto</button>       
                <button className='button-adding-evidence'>Examen</button>
            </div>
            <div id='button-cancel-adding'>
                <button id='button-cancel-evidence'>Cancelar</button>
            </div>
        </div>
    );
}

export default AddEvidens;
