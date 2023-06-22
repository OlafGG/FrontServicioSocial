import React from 'react';
import { useState, useEffect } from 'react';
import '../../css/porAlumno.class.css'

const PorAlumnosClass = () => {

    useEffect(() => {
        const fechData = async () => {
            const response = await fetch('http://localhost:8000/api/alumnos/')
            const data = await response.json()
            setalumno(data.message)
        };
        
        fechData()
    }, []);

    const [alumno, setalumno] = useState(null);

    return (
        <div id='porAlumnos-div-class-principal'>
            {
                alumno ? 
                alumno.map((element) => 
                <button className='button-alum-separate'>{element.alum_nombre}</button>
                ) : ''
            }
                
                
        </div>
    );
}

export default PorAlumnosClass;
