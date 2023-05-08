import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css'

const Login = () => {

    const [post, setPost] = useState(null);

    const baseUrl = "http://http://localhost:8000/api/user/";



    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setPost(response.data); 
        });
    }, []);



    return (
        <div className='form-login'>
            <div class="form-div-login">
                <div class="case-titulo">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle,imageFF" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                    <h5 class="Titulo">Formulario Login</h5>
                </div>
                <input class="control" type="text" name="usuario" placeholder="Ingrese su numero de empleado"/>
                <input class="control" id="pass-user" type="password" name="password" placeholder="NIP"/>
                <button class="buttons" id="btn1" name="" type="submit">Inicio Sesion</button>
                <label><input class="cbox1" type="checkbox"/><span id="check-names-disable">Recuerdame</span></label>
            </div>
        </div>
    );
}   

export default Login;
