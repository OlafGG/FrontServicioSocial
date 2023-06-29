import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './class.css'

const ClassForm = () => {

    const navegar = useNavigate();

    const [inputValue, setInputValue] = useState({
        materia_id: '',
        materia_name: '',
        materia_caracteristica_1: '',
        materia_caracteristica_2: '',
        materia_caracteristica_3: '',
        materia_caracteristica_4: '',
        materia_caracteristica_5: '',
        materia_caracteristica_6: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue((prevValoresInputs) => ({
          ...prevValoresInputs,
          [name]: value,
        }));
      };
 

        //FETCH: Putting data on databse

        


        async function  fechData (inputValue){

            const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValue) // Convierte el objeto a una cadena JSON
          };

            const response = await fetch('http://localhost:8000/api/materias/', options)
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
        <div className='principal-class-add'>
        {
            console.log(inputValue)
        }
            <div className='body' >
                <div className='titulo'>
                    <label id='titulo-label'>Creando una clase</label>
                </div>
                <div className='inputs'>
                    <label className='titulodescription'>Escribe el nombre de la clase y el ID</label>
                </div>
                <input type='text' placeholder='ID' name='materia_id' onChange={handleChange} value={inputValue.materia_id} id='id_materia' className='description'></input>
                <input type='text' placeholder='Nombre' name='materia_name' onChange={handleChange} value={inputValue.materia_name} id='name' className='description'></input>
                <div className='inputs'>
                    <label className='titulo-descripcion'>Descripcion de la clase</label>
                </div>    
                    <input type='text' placeholder='Caracteristica' name='materia_caracteristica_1' onChange={handleChange} value={inputValue.materia_caracteristica_1} id='d1' className='description'></input>
                    <input type='text' placeholder='Caracteristica' name='materia_caracteristica_2' onChange={handleChange} value={inputValue.materia_caracteristica_2} id='d2' className='description'></input>
                    <input type='text' placeholder='Caracteristica' name='materia_caracteristica_3' onChange={handleChange} value={inputValue.materia_caracteristica_3} id='d3' className='description'></input>
                    <input type='text' placeholder='Caracteristica' name='materia_caracteristica_4' onChange={handleChange} value={inputValue.materia_caracteristica_4} id='d4' className='description'></input>
                    <input type='text' placeholder='Caracteristica' name='materia_caracteristica_5' onChange={handleChange} value={inputValue.materia_caracteristica_5} id='d5' className='description'></input>
                    <input type='text' placeholder='Caracteristica' name='materia_caracteristica_6' onChange={handleChange} value={inputValue.materia_caracteristica_6} id='d6' className='description final'></input>
                <div>
                    <button type='submit' id='submit-button-add-class' onClick={()  => { fechData(inputValue);
                    setTimeout(() => {
                      navegar('/');
                    }, 4000)}}>Añadir</button>  
                </div>
                    
            </div>
        </div>
    );
}

export default ClassForm;
