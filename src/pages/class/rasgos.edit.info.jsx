import React from 'react';
import '../../css/rasgos.edit.info.css'

const RasgosEditInfo = () => {
    return (
        <div id='rasgos-div-info-edit-principal'>
            <div id='title-div-info-edit'>
                <button className='button-title-up'><i style={{fontSize: '140%'}} class="bi bi-house-door-fill"></i></button>
                <label id='title-class-edit'>Introduccion a la programacion</label>
                <button className='button-title-up'><i style={{fontSize: '140%'}} class="bi bi-box-arrow-right"></i></button>
            </div>
            <div id='title-rasgo-class-edit'>
                <hr/>
                <label id='title-position-class'>Ragos</label>
            </div>
            <div id='message-class-edit'>
                <label id='actualmente-message'>Acutalmente solo tienes un modelo de evaluacion</label>
                <hr/>
                <label id='model-class'>Modelo 1</label>
                <br/>
                <label id='message-model-evaluation'>Todos los periodos son evaluados encon este modelo</label>
                <br/>
                <ul>
                    <li><label className='evaluation-model'>Actividades</label><span className='evaluation-model'>15%</span></li>
                    <li><label className='evaluation-model'>Tareas</label><span className='evaluation-model'>15%</span></li>
                    <li><label className='evaluation-model'>Proyectos</label><span className='evaluation-model'>15%</span></li>
                    <li><label className='evaluation-model'>Examen</label><span className='evaluation-model'>15%</span></li>
                    <li><label className='evaluation-model'>Practicas</label><span className='evaluation-model'>15%</span></li>
                    <li><label className='evaluation-model'>Asistencia</label><span className='evaluation-model'>15%</span></li>
                    <li><label className='evaluation-model'>Trabajos</label><span className='evaluation-model'>15%</span></li>
                </ul>
            </div>
            <div id='buttons-end-model-class'>
                <button id='back-model-class'><i style={{fontSize: '140%'}} class="bi bi-arrow-left"></i></button>
                <button className='model-edit-button-class'>Agrgar modelo</button>
                <button className='model-edit-button-class'>Eliminar modelo</button>
                <button className='model-edit-button-class'>Guardar modelo</button>
            </div>
        </div>
    );
}

export default RasgosEditInfo;
