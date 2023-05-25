import React from 'react';
import {useState} from 'react';
import './homepages.css';
import ClassForm from '../../components/pure/form/class.form';
import CardClass from '../../components/pure/card.class';
import EditInfoClass from '../class/edit.info.class';
import TablasInfoCalendary from '../class/tablas.info.calendary';


const HomePage = () => {
    
    const cambiarColorM = (id) => {
        const boton = document.getElementById(id);
        boton.style.backgroundColor = 'rgb(204, 39, 72)'
        boton.style.color = 'white';
         if(historialboton){
        const botonAnterior = document.getElementById(historialboton);
        botonAnterior.style.backgroundColor='white'
        botonAnterior.style.color='black'
        }else{
            document.getElementById('btnHome').classList.remove('active')
        }
        setBtnH(id)
    }
    
    const [historialboton, setBtnH] = useState();

    return (
        <div className='main'>
            <div className='contenedor-menu-izquierda'>
                <nav className='navdiv'>
                    <button className={ 'btnNav btnArriba bi bi-list'} onClick={() => {cambiarColorM('btnList')}} id='btnList'></button>
                    <button className='btnNav btnArriba bi bi-house-door-fill active' onClick={() => {cambiarColorM('btnHome')}} id='btnHome'></button>
                    <button className='btnNav btnArriba bi bi-calendar-fill' id='btncalendario' onClick={() => {cambiarColorM('btncalendario')}}></button>
                    <button className='btnNav btnArriba bi bi-card-list' id='btncardList' onClick={() => {cambiarColorM('btncardList')}}></button>
                    <button className='btnNav btnFinal bi bi-gear-fill' id='btn1'onClick={() => {cambiarColorM('btn1')}} ></button>
                    <button className='btnNav btnFinal' id='btn2'>Logo CD  </button>
                </nav>
            </div>
            <div className='principal'>
                <div className='mis-clases-label titulo'>
                    <label>Mis clases</label>
                </div>
                <div className='mis-clases-label nombre-maestro'>
                    <label>{/*user.name*/}Juan</label>
                </div>
                
                <div className='fondo'>
                    {/*<EditInfoClass></EditInfoClass>*/}
                    {/*<CardClass></CardClass>*/}
                    <TablasInfoCalendary></TablasInfoCalendary>
                </div>
                <div id='btnAdding'>
                    <button id='btnAdd'>Añadir Clases</button>
                </div>
                
            </div>
            
        </div>
    );
}

export default HomePage;
