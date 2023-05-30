import React from 'react';
import '../../css/advice.deleting.class.css'

//clase v dentro de las props
const AdviceDeletingClass = () => {

    const clase = {
        nombre: 'Introduccion a la programacion',
        c_1: 'Martes 11 - 13',
        c_2: 'Jueves 9 - 11',
        c_3: 'Grupo 32',
        c_4: '1er Semestre',
        c_5: 'Ingenieria de software',
        c_6: 'Aula 11'
    }

    const {c_1, c_2, c_3, c_4, c_5, c_6} = clase;
    
    const caracteristicas = [c_1, c_2, c_3, c_4, c_5, c_6]

    return (
        <div id='portatodo-class-div'>
            <div id='advice-class-deleting-principal'>
                <div id='title-advice-deleting-principal'>
                    <label id='deleting-class-advice-title-label'>Eliminando Clase</label>
                </div>
                <div id='secure-advice-deleting'>
                    <p>¿Está seguro que desea eleminar definitivamente a la clase "<label id='class-name-advice-label'>{clase.nombre}</label>" con los siguientes datos?</p>
                </div>
                <div id='div-data-advice'>
                <ul id='list-carac-display'>
                    {
                        caracteristicas.map((carct) => 
                        <li>{carct}</li>
                        )
                    }
                   <input id='input-class-advice-deleting' type='password' placeholder='NIP'></input> 
                </ul>
                
                </div>
                <div id='div-data-buttons'>
                    <button className='button-advice-deleting-class' id='borrar-class-advice-button'>Borrar Clase</button>
                    <button className='button-advice-deleting-class' id='cancelar-class-advice-button'>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default AdviceDeletingClass;
