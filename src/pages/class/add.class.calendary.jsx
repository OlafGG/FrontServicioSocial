import React from 'react';
import { useState } from 'react';
import '../../css/add.class.calendary.css'
import { useNavigate } from 'react-router-dom';

const AddClassCalendary = () => {

    const navegar = useNavigate();
    const [calendario, setcalendario] = useState({
        day: '',
        hour: '',
        title: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setcalendario((prevValoresInput) =>({
            ...prevValoresInput,
            [name]: value,
        }));
    };

    async function  fechData (inputValue){

        const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputValue) // Convierte el objeto a una cadena JSON
      };

        const response = await fetch('http://localhost:8000/api/calendario/', options)
        .then(response => {
          if (response.ok) {
            // La solicitud se realizó correctamente
            console.log('Datos actualizados');
          } else {
            // Ocurrió un error en la solicitud
            console.error('Error al actualizar los datos');
          }
        })
        .catch(error => {
          // Ocurrió un error en la comunicación con el servidor
          console.error('Error de red:', error);
        });
        
    }

    return (
        <div id='fondo-class-calendary-add'>
            {
                console.log(calendario)
            }
            <div id='adding-element-div-principal'>
                <div id='h1-div-title'>
                    <h1>Agrgando elemento a calendario</h1>
                </div>
                <div id='div-input-text'>
                    <input id='input-text-adding' type='text' name='nombre' onChange={handleChange} value={calendario.title} placeholder='Escribe el nombre de la clase'></input>
                </div>
                <div id='div-text-label-info'>
                    <label>Selecciona los días y horarios</label>
                </div>
                <div id='div-hours-days'>
                    <div id='left-hours'>
                        <div className='div-inputs'><input className='hora-adding' name='radioB' onChange={handleChange} value={calendario.hour} type='radio' id='7-am'></input><label  className='label-check-input' for='7-am'>7AM</label></div> 
                        <div className='div-inputs'><input className='hora-adding' name='radioB' onChange={handleChange} value={calendario.hour} type='radio' id='8-am'></input><label  className='label-check-input' for='8-am'>8AM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='radioB' onChange={handleChange} value={calendario.hour} type='radio' id='9-am'></input><label  className='label-check-input' for='9-am'>9AM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='radioB' onChange={handleChange} value={calendario.hour} type='radio' id='10-am'></input><label  className='label-check-input' for='10-am'>10AM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='radioB' onChange={handleChange} value={calendario.hour} type='radio' id='11-am'></input><label  className='label-check-input' for='11-am'>11AM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='radioB' onChange={handleChange} value={calendario.hour} type='radio' id='12-pm'></input><label  className='label-check-input' for='12-pm'>12PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='radioB' onChange={handleChange} value={calendario.hour} type='radio' id='1-pm'></input><label  className='label-check-input' for='1-pm'>1PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='radioB' onChange={handleChange} value={calendario.hour} type='radio' id='2-pm'></input><label  className='label-check-input' for='2-pm'>2PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='radioB' onChange={handleChange} value={calendario.hour} type='radio' id='3-pm'></input><label  className='label-check-input' for='3-pm'>3PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='radioB' onChange={handleChange} value={calendario.hour} type='radio' id='4-pm'></input><label  className='label-check-input' for='4-pm'>4PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='radioB' onChange={handleChange} value={calendario.hour} type='radio' id='5-pm'></input><label  className='label-check-input' for='5-pm'>5PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='radioB' onChange={handleChange} value={calendario.hour} type='radio' id='6-pm'></input><label  className='label-check-input' for='6-pm'>6PM</label></div>
                    </div>
                    <div id='right-day'>
                        <div className='div-inputs'><input name='radioday' onChange={handleChange} value={calendario.day} className='day-adding' type='checkbox' id='lunes'></input><label  className='label-check-input' for='lunes'>LUNES</label></div>
                        <div className='div-inputs'><input name='radioday' onChange={handleChange} value={calendario.day} className='day-adding' type='checkbox' id='martes'></input><label  className='label-check-input' for='martes'>MARTES</label></div>
                        <div className='div-inputs'><input name='radioday' onChange={handleChange} value={calendario.day} className='day-adding' type='checkbox' id='miercoles'></input><label  className='label-check-input' for='miercoles'>MIERCOLES</label></div>
                        <div className='div-inputs'><input name='radioday' onChange={handleChange} value={calendario.day} className='day-adding' type='checkbox' id='jueves'></input><label  className='label-check-input' for='jueves'>JUEVES</label></div>
                        <div className='div-inputs'><input name='radioday' onChange={handleChange} value={calendario.day} className='day-adding' type='checkbox' id='viernes'></input><label  className='label-check-input' for='viernes'>VIERNES</label></div>
                    </div>
                </div>
                <div id='div-button-adding-calendary'>
                    <button className='button-adding-calendary' id='aceptar-button-adding' onClick={() => {fechData(calendario);
                        setTimeout(() => {
                           navegar('/calendario') 
                        }, 4000)
                        
                    }}>Aceptar</button>
                    <button className='button-adding-calendary' onClick={() => {
                        setTimeout(() => {
                            navegar('/calendario')
                        }, 4000)
                    }}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default AddClassCalendary;
