import React from 'react';
import '../../css/login.css'
import HomePage from '../home/HomePage';
import { useNavigate, Link } from 'react-router-dom'

function Login () {

    const usuario = {
        expediente: '1234',
        password: '6m9pqp5v'
    }
    
    const navigate = useNavigate();
    const logged = () => {
       
        //e.preventDefault();
        /*const loginForm = document.querySelector('.login-form');
        const usernameInput = loginForm.querySelector('input[type="number"]');
        const passwordInput = loginForm.querySelector('input[type="password"]');
      
        const expediente = usernameInput.value;
        const password = passwordInput.value;
      
        // Comprobar si los datos coinciden con el usuario y contraseña predeterminados
        if (expediente === usuario.expediente && password === usuario.password) {
          // Iniciar sesión exitosa, redirigir a la página principal
          
        } else {
          // Mostrar mensaje de error o realizar otras acciones
          alert('Usuario o contraseña incorrectos');
        }*/
        navigate(<HomePage></HomePage>)
        
      }

    return (
    <div id='div-login-principal'>
    <div class="login-container">
    <div class="triangle-top"></div>
    <div class="triangle-bottom"></div>
    <div class="login-form">
    <i style={{fontSize: '200%'}} class="bi bi-person-circle"></i>
        <h2>Iniciar sesión</h2>
        <div>
        <input id='expediente' type="text" placeholder="Expediente"/>
        <input id='password' type="password" placeholder="Contraseña"/>
        <button type="submit">Ingresar</button>
        <div id='input-div'>
           <input onClick={() => logged()} type='checkbox' id='checkbox-remember'></input> <label for='checkbox-remember'>Recuerdame</label> 
        </div>
        </div>
    </div>
    </div>
    </div>
    );
}

export default Login;
