import React from 'react';
import '../../css/porAlumno.class.css'

const PorAlumnosClass = () => {

    const alumno = [{
        nombre: 'Juan Yepez'
    },
    {
        nombre: 'Aros Ramirez'
    },
    {
        nombre: 'Uriel Olaf'
    },
    {
        nombre: 'Juan Yepez'
    },
    {
        nombre: 'Aros Ramirez'
    },
    {
        nombre: 'Uriel Olaf'
    },
    {
        nombre: 'Juan Yepez'
    },
    {
        nombre: 'Aros Ramirez'
    },
    {
        nombre: 'Uriel Olaf'
    },
    {
        nombre: 'Juan Yepez'
    },
    {
        nombre: 'Aros Ramirez'
    },
    {
        nombre: 'Uriel Olaf'
    },
    {
        nombre: 'Juan Yepez'
    },
    {
        nombre: 'Aros Ramirez'
    },
    {
        nombre: 'Uriel Olaf'
    },
    {
        nombre: 'Juan Yepez'
    },
    {
        nombre: 'Aros Ramirez'
    },
    {
        nombre: 'Uriel Olaf'
    }
    ]

    return (
        <div id='porAlumnos-div-class-principal'>
            {
                alumno.map((element) => 
                <button className='button-alum-separate'>{element.nombre}</button>
                )
            }
                
                
        </div>
    );
}

export default PorAlumnosClass;
