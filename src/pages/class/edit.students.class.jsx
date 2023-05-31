import React from 'react';
import '../../css/edit.students.class.css'

const EditStudentsClass = (/*{alumnos}*/) => {

    const alumnos = [{
        name: 'Jose Juan'
    },
    {
        name: 'Jorge Campos'
    },
    {
        name: 'Daniel Aros'
    },
    {
        name: 'Jose Juan'
    },
    {
        name: 'Jorge Campos'
    },
    {
        name: 'Daniel Aros'
    },
    {
        name: 'Jose Juan'
    },
    {
        name: 'Jorge Campos'
    },
    {
        name: 'Daniel Aros'
    },
    {
        name: 'Daniel Aros'
    },
    {
        name: 'Jose Juan'
    },
    {
        name: 'Jorge Campos'
    },
    {
        name: 'Daniel Aros'
    },
    {
        name: 'Jose Juan'
    },
    {
        name: 'Jorge Campos'
    },
    {
        name: 'Daniel Aros'
    }
    ]

    return (
        <div id='fondo-edit-students-class'>
            <div id='edit-students-class-principal'>
                <div id='title-div-students-class'>
                    <h1 id='title-label-students'>Editando alumnos</h1>
                </div>
                <div id='div-students-name-class'>
                <ul>
                {
                    alumnos.map((element) => 
                    <>
                    <li><input type='checkbox'></input><div className='li-edit' id='div-check-front'><label>{element.name}</label></div><div className='lidos-edit'><i style={{fontSize: '140%'}} class="bi bi-pencil-square i-edit"></i><i style={{fontSize: '140%'}} class="bi bi-trash3-fill i-edit"></i></div></li>
                    </>
                    )
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
