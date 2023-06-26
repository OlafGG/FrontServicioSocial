import React from 'react';
import '../../css/deleting.students.advice.css'

const DeletingStudentsAdvice = ({alumno, handleclick}) => {

    async function  fechData (inputValue){

        const options = {
        method: 'DELETE',
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
        <div id='fondo-deleting-students-advice'>
            <div id='principal-deleting-advice'>
                <div id='title-div-deleting-advice'>
                    <h1 id='title-h1-deleting-advice'>Eliminando alumno</h1>
                </div>
                <div id='div-text-sure'>
                    <p>¿Está seguro que desea eliminar a {alumno.alum_nombre}? Los datos del alumno(a) se perderán</p>
                    {
                        console.log(alumno)
                    }
                </div>
                <div id='nip-div'>
                    <label id='label-nip-put'>Ingrese su nip para confirmar</label><input id='input-nip-put' type='password' placeholder='NIP'></input>
                </div>
                <div id='buttons-deleting-students-advice-final'>
                    <button className='buttons-deleting-advice-final' id='cancelar-button-students-advice' onClick={() => handleclick(5, '')}>Cancelar</button>
                    <button className='buttons-deleting-advice-final' id='deleting-button-students-advice' onClick={() => {fechData(alumno); 
                    
                    setTimeout(() => {
                        handleclick(1, '')
                    }, 4000);
                    }}>Eliminar</button>
                </div>
            </div>
        </div>
    );
}

export default DeletingStudentsAdvice;
