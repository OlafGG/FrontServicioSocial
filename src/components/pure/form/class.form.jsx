import React from 'react';
import './class.css'

const ClassForm = () => {
    return (
        <div className='principal'>
            <div className='body'>
                <div className='titulo'>
                    <label id='titulo-label'>Creando una clase</label>
                </div>
                <div className='inputs'>
                    <label className='titulodescription'>Escribe el nombre de la clase</label>
                </div>
                <input type='text' placeholder='Nombre' className='description'></input>
                <div className='inputs'>
                    <label className='titulo-descripcion'>Descripcion de la clase</label>
                </div>    
                    <input type='text' placeholder='Caracteristica' className='description'></input>
                    <input type='text' placeholder='Caracteristica' className='description'></input>
                    <input type='text' placeholder='Caracteristica' className='description'></input>
                    <input type='text' placeholder='Caracteristica' className='description'></input>
                    <input type='text' placeholder='Caracteristica' className='description'></input>
                    <input type='text' placeholder='Caracteristica' className='description'></input>
                <div>
                    <button type='submit'>hola padrino</button>  
                </div>
                    
            </div>
        </div>
    );
}

export default ClassForm;
