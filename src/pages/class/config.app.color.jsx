import React from 'react';
import {useState} from 'react'
import '../../css/config.app.color.css'

const ConfigAppColor = () => {

    const [historialboton, setBtnH] = useState();

    const cambiarColorM = (id) => {
        const boton = document.getElementById(id);
        boton.classList.add('bi')
        boton.classList.add('bi-check-lg')
        boton.classList.add('whiteone')
         if(historialboton){
            const iAnterior =  document.getElementById(historialboton);
            iAnterior.classList.remove('bi')
            iAnterior.classList.remove('bi-check-lg')
            iAnterior.classList.remove('whiteone')
        }else{
            document.getElementById('btn-pink').classList.remove('bi')
            document.getElementById('btn-pink').classList.remove('bi-check-lg')
            document.getElementById('btn-pink').classList.remove('whiteone')
        }
        setBtnH(id)
    }

    return (
        <div id='fondo-colors-adjust'> 
            <div id='div-front-colors-adjust'>
                <div id='div-title-front'>
                    <h1>Ajustes</h1>
                </div>
                <div id='docente-front-adjust'>
                    <label id='prof-title'>Docente: Dieguito</label>
                    <p id='chosing-theme'>Elige el tema principal:</p>
                </div>
                <div id='colors-chosing-adjust'>
                    <button id='pink' className='button-chosing-theme' onClick={() => {cambiarColorM('btn-pink')}}><i className='bi bi-check-lg  whiteone' id='btn-pink'></i></button>
                    <button id='purple' className='button-chosing-theme' onClick={() => {cambiarColorM('btn-purple')}}><i id='btn-purple'></i></button>
                    <button id='king-blue' className='button-chosing-theme' onClick={() => {cambiarColorM('btn-king-blue')}}><i id='btn-king-blue'></i></button>
                    <button id='blue' className='button-chosing-theme' onClick={() => {cambiarColorM('btn-blue')}} ><i id='btn-blue'></i></button>
                    <button id='black' className='button-chosing-theme' onClick={() => {cambiarColorM('btn-black')}}><i id='btn-black'></i></button>
                </div>

            </div>
        </div>
    );
}

export default ConfigAppColor;
