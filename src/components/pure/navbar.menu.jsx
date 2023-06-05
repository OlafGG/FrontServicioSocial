import React from 'react';
import {useNavigate, Outlet} from 'react-router-dom'
import {useState} from 'react'


const NavbarMenu = () => {

    const cambiarColorM = (id, path) => {
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
        navigateProps(path)
    }

    const navigateProps = (path) => {
        camino({
            pathname: path,
        });
    }
    
    const [historialboton, setBtnH] = useState();

    const camino = useNavigate();

    return (
        <>
        <div className='contenedor-menu-izquierda'>
            <nav className='navdiv'>
                    <button className={ 'btnNav btnArriba bi bi-list'} onClick={() => {cambiarColorM('btnList')}} id='btnList'></button>
                    <button className='btnNav btnArriba bi bi-house-door-fill active' onClick={() => {cambiarColorM('btnHome', '/')}} id='btnHome'></button>
                    <button className='btnNav btnArriba bi bi-calendar-fill' id='btncalendario' onClick={() => {cambiarColorM('btncalendario', '/calendario'); }}></button>
                    <button className='btnNav btnArriba bi bi-card-list' id='btncardList' onClick={() => {cambiarColorM('btncardList', '/reviciones')}}></button>
                    <button className='btnNav btnFinal bi bi-gear-fill' id='btn1'onClick={() => {cambiarColorM('btn1', '/color')}} ></button>
                    <button className='btnNav btnFinal' id='btn2'>Logo CD  </button>
                </nav>
        </div>
        <Outlet/>
        </>
    );
}

export default NavbarMenu;
