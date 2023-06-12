import React from 'react';
import '../../css/deleting.students.advice.css'

const DeletingStudentsAdvice = ({alumno, handleclick}) => {

    /*const alumno = {
        id: 123,
        name: 'Jose Maria'
    }*/

    return (
        <div id='fondo-deleting-students-advice'>
            <div id='principal-deleting-advice'>
                <div id='title-div-deleting-advice'>
                    <h1 id='title-h1-deleting-advice'>Eliminando alumno</h1>
                </div>
                <div id='div-text-sure'>
                    <p>¿Está seguro que desea eliminar a {alumno.name}? Los datos del alumno(a) se perderán</p>
                </div>
                <div id='nip-div'>
                    <label id='label-nip-put'>Ingrese su nip para confirmar</label><input id='input-nip-put' type='password' placeholder='NIP'></input>
                </div>
                <div id='buttons-deleting-students-advice-final'>
                    <button className='buttons-deleting-advice-final' id='cancelar-button-students-advice' onClick={() => handleclick(5, '')}>Cancelar</button>
                    <button className='buttons-deleting-advice-final' id='deleting-button-students-advice' onClick={() => handleclick(1, '')}>Eliminar</button>
                </div>
            </div>
        </div>
    );
}

export default DeletingStudentsAdvice;
