import React from 'react';
import '../../css/add.student.info.css'

const AddStudent = () => {
    return (
        <div className='adding-student-principal'>
            <div className='adding-title-principal'>
                <label>Añadiendo un alumno</label>
            </div>
            <div className='add-info-student'>
                <input id='input-id' type='text' placeholder='Nombre del alumno'></input>
                <p>Nota: Solo se mostraran las dos primeras palabras</p>
            </div>
            <div className='button-adding-student-info'>
                <button className='button-adding-info-student' id='cancelar'>Cancelar</button>
                <button className='button-adding-info-student' id='aceptar'>Aceptar</button>
            </div>
        </div>
    );
}

export default AddStudent;
