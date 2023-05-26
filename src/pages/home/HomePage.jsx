import React from 'react';
import {useState} from 'react';
import './homepages.css';
import ClassForm from '../../components/pure/form/class.form';
import CardClass from '../../components/pure/card.class';
import EditInfoClass from '../class/edit.info.class';
import TablasInfoCalendary from '../class/tablas.info.calendary';
import Calendar from '../../components/pure/calendary';
import CalendarioClass from '../class/calendario.class';
import CardClassShow from '../class/card.class.show';


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
                
                <div className='fondo'>
                    {/*<EditInfoClass></EditInfoClass>*/}
                    {/*<CardClass></CardClass>*/}
                    {/*<TablasInfoCalendary></TablasInfoCalendary>*/}
                    <CalendarioClass></CalendarioClass>
                    {/*<CardClassShow></CardClassShow>*/}
                </div>
                
            </div>
            
        </div>
    );
}

export default HomePage;
