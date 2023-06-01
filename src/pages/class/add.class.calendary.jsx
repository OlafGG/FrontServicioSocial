import React from 'react';
import '../../css/add.class.calendary.css'

const AddClassCalendary = () => {
    return (
        <div id='fondo-class-calendary-add'>
            <div id='adding-element-div-principal'>
                <div id='h1-div-title'>
                    <h1>Agrgando elemento a calendario</h1>
                </div>
                <div id='div-input-text'>
                    <input id='input-text-adding' type='text' placeholder='Escribe el nombre de la clase'></input>
                </div>
                <div id='div-text-label-info'>
                    <label>Selecciona los días y horarios</label>
                </div>
                <div id='div-hours-days'>
                    <div id='left-hours'>
                        <div className='div-inputs'><input className='hora-adding' type='checkbox' id='7-am'></input><label for='7-am'>7 AM</label></div> 
                        <div className='div-inputs'><input className='hora-adding' type='checkbox' id='8-am'></input><label for='8-am'>8 AM</label></div>
                        <div className='div-inputs'><input className='hora-adding' type='checkbox' id='9-am'></input><label for='9-am'>9 AM</label></div>
                        <div className='div-inputs'><input className='hora-adding' type='checkbox' id='10-am'></input><label for='10-am'>10 AM</label></div>
                        <div className='div-inputs'><input className='hora-adding' type='checkbox' id='11-am'></input><label for='11-am'>11 AM</label></div>
                        <div className='div-inputs'><input className='hora-adding' type='checkbox' id='12-pm'></input><label for='12-pm'>12 PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' type='checkbox' id='1-pm'></input><label for='1-pm'>1 PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' type='checkbox' id='2-pm'></input><label for='2-pm'>2 PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' type='checkbox' id='3-pm'></input><label for='3-pm'>3 PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' type='checkbox' id='4-pm'></input><label for='4-pm'>4 PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' type='checkbox' id='5-pm'></input><label for='5-pm'>5 PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' type='checkbox' id='6-pm'></input><label for='6-pm'>6 PM</label></div>
                    </div>
                    <div id='right-day'>
                        <div className='div-inputs'><input className='day-adding' type='checkbox' id='lunes'></input><label for='lunes'>Lunes</label></div>
                        <div className='div-inputs'><input className='day-adding' type='checkbox' id='martes'></input><label for='martes'>Martes</label></div>
                        <div className='div-inputs'><input className='day-adding' type='checkbox' id='miercoles'></input><label for='miercoles'>Miercoles</label></div>
                        <div className='div-inputs'><input className='day-adding' type='checkbox' id='jueves'></input><label for='jueves'>Jueves</label></div>
                        <div className='div-inputs'><input className='day-adding' type='checkbox' id='viernes'></input><label for='viernes'>Viernes</label></div>
                    </div>
                </div>
                <div id='div-button-adding-calendary'>
                    <button className='button-adding-calendary' id='aceptar-button-adding'>Aceptar</button>
                    <button className='button-adding-calendary'>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default AddClassCalendary;
