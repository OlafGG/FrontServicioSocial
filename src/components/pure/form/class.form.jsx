import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './class.css'

const ClassForm = () => {

    const navegar = useNavigate();

    const materia = {
        nombre: '',
        materia_caracteristica_1: '',
        materia_caracteristica_2: '',
        materia_caracteristica_3: '',
        materia_caracteristica_4: '',
        materia_caracteristica_5: '',
        materia_caracteristica_6: ''
    }

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
    const [des1, setdes1] = useState('');
    const [des2, setdes2] = useState('');
    const [des3, setdes3] = useState('');
    const [des4, setdes4] = useState('');
    const [des5, setdes5] = useState('');
    const [des6, setdes6] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setdes1(event.target.value);
        setdes2(event.target.value);
        setdes3(event.target.value);
        setdes4(event.target.value);
        setdes5(event.target.value);
        setdes6(event.target.value);
    };
 
    const handleSubmit = (event) => {
        event.preventDefault();
        // Utiliza el valor de 'inputValue' para lo que necesites
        console.log(inputValue);
        setInputValue('');
        setdes1('');
        setdes2('');
        setdes3('');
        setdes4('');
        setdes5('');
        setdes6(''); 
        // Restablece el campo de entrada después de enviar el formulario
    };

    return (
        <div className='principal-class-add'>
        {
            console.log(inputValue)
        }
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
                    <input type='text' placeholder='Caracteristica' onChange={handleInputChange} value={des1}  id='d1' className='description'></input>
                    <input type='text' placeholder='Caracteristica' onChange={handleInputChange} value={des2} id='d2' className='description'></input>
                    <input type='text' placeholder='Caracteristica' onChange={handleInputChange} value={des3} id='d3' className='description'></input>
                    <input type='text' placeholder='Caracteristica' onChange={handleInputChange} value={des4} id='d4' className='description'></input>
                    <input type='text' placeholder='Caracteristica' onChange={handleInputChange} value={des5} id='d5' className='description'></input>
                    <input type='text' placeholder='Caracteristica' onChange={handleInputChange} value={des6} id='d6' className='description final'></input>
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
