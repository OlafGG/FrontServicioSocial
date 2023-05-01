import React from 'react';
import './login.css'

const Login = () => {
    return (
        <div className='form-login'>
            <div class="form-div-login">
                <div class="case-titulo">
                    <picture>
                        
                    </picture>
                    <h5 class="Titulo">Formulario Login</h5>
                </div>
                <input class="control" type="text" name="usuario" placeholder="Ingrese su numero de empleado"/>
                <input class="control" id="pass-user" type="password" name="password" placeholder="NIP"/>
                <button class="buttons" id="btn1" name="">Inicio Sesion</button>
                <label><input class="cbox1" type="checkbox"/><span id="check-names-disable">Recuerdame</span></label>
            </div>
        </div>
    );
}

export default Login;
