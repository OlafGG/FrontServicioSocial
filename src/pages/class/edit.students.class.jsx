import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/edit.students.class.css'
import DeletingStudentsAdvice from './deleting.students.advice';

const EditStudentsClass = (/*{alumnos}*/{handleClick}) => {

    
    const [alumnos, setstudents] = useState();

    useEffect(() => {
        const fechData = async () => {
            const response = await fetch('http://localhost:8000/api/alumnos/')
            const data = await response.json()
            setstudents(data.message)
        };
        
        fechData()
    }, []);

    return (
        <div id='fondo-edit-students-class'>
            <div id='edit-students-class-principal'>
                <div id='title-div-students-class'>
                    <h1 id='title-label-students'>Editando alumnos</h1>
                </div>
                <div id='div-students-name-class'>
                <ul>
                {
                    alumnos ? 
                    alumnos.map((element) => 
                    <>
                    <li><input type='checkbox'></input><div className='li-edit' id='div-check-front'><label>{element.alum_nombre}</label></div><div className='lidos-edit'><i style={{fontSize: '140%'}} class="bi bi-pencil-square i-edit"></i><i style={{fontSize: '140%'}} class="bi bi-trash3-fill i-edit" onClick={() => handleClick(6, element)}></i></div></li>
                    </>
                    ) : ''
                }
                </ul>
                </div>
                <div id='div-buttons-edit-students'>
                    <button className='buttons-edit-students-class' id='cancel-button-edit-class'>Cancelar</button>
                    <button className='buttons-edit-students-class' id='save-button-edit-class'>Guardar cambios</button>
                </div>
            </div>
        </div>
    );
}

export default EditStudentsClass;
