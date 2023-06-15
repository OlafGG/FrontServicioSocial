import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './class.css'

const ClassForm = () => {

    const navegar = useNavigate();

    /*{
        name: document.getElementById("name").value,
        c1: document.getElementById("d1").value,
        c2: document.getElementById("d2").value,
        c3: document.getElementById("d3").value,
        c4: document.getElementById("d4").value,
        c5: document.getElementById("d5").value,
        c6: document.getElementById("d6").value
    }*/
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
 
    const handleSubmit = (event) => {
        event.preventDefault();
        // Utiliza el valor de 'inputValue' para lo que necesites
        console.log(inputValue);
        setInputValue(''); // Restablece el campo de entrada después de enviar el formulario
    };

    return (
        <div className='principal-class-add'>
            <div className='body' onSubmit={handleSubmit}>
                <div className='titulo'>
                    <label id='titulo-label'>Creando una clase</label>
                </div>
                <div className='inputs'>
                    <label className='titulodescription'>Escribe el nombre de la clase</label>
                </div>
                <input type='text' placeholder='Nombre' onChange={handleInputChange} value={inputValue} id='name' className='description'></input>
                <div className='inputs'>
                    <label className='titulo-descripcion'>Descripcion de la clase</label>
                </div>    
                    <input type='text' placeholder='Caracteristica' id='d1' className='description'></input>
                    <input type='text' placeholder='Caracteristica' id='d2' className='description'></input>
                    <input type='text' placeholder='Caracteristica' id='d3' className='description'></input>
                    <input type='text' placeholder='Caracteristica' id='d4' className='description'></input>
                    <input type='text' placeholder='Caracteristica' id='d5' className='description'></input>
                    <input type='text' placeholder='Caracteristica' id='d6' className='description final'></input>
                <div>
                    <button type='submit' id='submit-button-add-class' onClick={() => {
                        /*navegar('/')*/
                    }}>Añadir</button>  
                </div>
                    
            </div>
        </div>
    );
}

export default ClassForm;
