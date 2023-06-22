import React from 'react';
import { useState } from 'react';
import '../../css/add.student.info.css'

const AddStudent = () => {


    const [alumno, setalumno] = useState({
        alum_id: 0,
        alum_nombre: '',
        promedio_parcial_1: 0.0,
        promedio_parcial_2: 0.0,
        promedio_parcial_3: 0.0,
        promedio_final: 0.0
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setalumno((prevValoresInputs) => ({
          ...prevValoresInputs,
          [name]: value,
        }));
      };


      async function  fechData (inputValue){

        const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputValue) // Convierte el objeto a una cadena JSON
      };

        const response = await fetch('http://localhost:8000/api/alumnos/', options)
        .then(response => {
          if (response.ok) {
            // La solicitud se realizó correctamente
            console.log('Datos actualizados');
          } else {
            // Ocurrió un error en la solicitud
            console.error('Error al actualizar los datos');
          }
        })
        .catch(error => {
          // Ocurrió un error en la comunicación con el servidor
          console.error('Error de red:', error);
        });
        
    }

    return (
        <div className='adding-student-principal'>
            <div className='adding-title-principal'>
                <label>Añadiendo un alumno</label>
            </div>
            <div className='add-info-student'>
            <input id='input-id_n' type='number' placeholder='ID alumno'></input>
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
