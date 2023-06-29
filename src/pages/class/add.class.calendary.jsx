import React from 'react';
import { useState } from 'react';
import '../../css/add.class.calendary.css'
import { useNavigate } from 'react-router-dom';

const AddClassCalendary = () => {

    const navegar = useNavigate();
    const [calendario, setcalendario] = useState({
        day: '',
        hour: '',
        title: '',
        id_profesor: 123456
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
            console.error('Error al añadir los datos');
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
                    <input id='input-text-adding' type='text' name='title' onChange={handleChange} value={calendario.title} placeholder='Escribe el nombre de la clase'></input>
                </div>
                <div id='div-text-label-info'>
                    <label>Selecciona los días y horarios</label>
                </div>
                <div id='div-hours-days'>
                    <div id='left-hours'>
                        <div className='div-inputs'><input className='hora-adding' name='hour' onChange={handleChange} checked={calendario.hour === '7 AM'} value={'7 AM'} type='radio' id='7-am'></input><label  className='label-check-input' for='7-am'>7AM</label></div> 
                        <div className='div-inputs'><input className='hora-adding' name='hour' onChange={handleChange} checked={calendario.hour === '8 AM'} value={'8 AM'} type='radio' id='8-am'></input><label  className='label-check-input' for='8-am'>8AM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='hour' onChange={handleChange} checked={calendario.hour === '9 AM'} value={'9 AM'} type='radio' id='9-am'></input><label  className='label-check-input' for='9-am'>9AM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='hour' onChange={handleChange} checked={calendario.hour === '10 AM'} value={'10 AM'} type='radio' id='10-am'></input><label  className='label-check-input' for='10-am'>10AM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='hour' onChange={handleChange} checked={calendario.hour === '11 AM'} value={'11 AM'} type='radio' id='11-am'></input><label  className='label-check-input' for='11-am'>11AM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='hour' onChange={handleChange} checked={calendario.hour === '12 PM'} value={'12 PM'} type='radio' id='12-pm'></input><label  className='label-check-input' for='12-pm'>12PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='hour' onChange={handleChange} checked={calendario.hour === '1 PM'} value={'1 PM'} type='radio' id='1-pm'></input><label  className='label-check-input' for='1-pm'>1PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='hour' onChange={handleChange} checked={calendario.hour === '2 PM'} value={'2 PM'} type='radio' id='2-pm'></input><label  className='label-check-input' for='2-pm'>2PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='hour' onChange={handleChange} checked={calendario.hour === '3 PM'} value={'3 PM'} type='radio' id='3-pm'></input><label  className='label-check-input' for='3-pm'>3PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='hour' onChange={handleChange} checked={calendario.hour === '4 PM'} value={'4 PM'} type='radio' id='4-pm'></input><label  className='label-check-input' for='4-pm'>4PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='hour' onChange={handleChange} checked={calendario.hour === '5 PM'} value={'5 PM'} type='radio' id='5-pm'></input><label  className='label-check-input' for='5-pm'>5PM</label></div>
                        <div className='div-inputs'><input className='hora-adding' name='hour' onChange={handleChange} checked={calendario.hour === '6 PM'} value={'6 PM'} type='radio' id='6-pm'></input><label  className='label-check-input' for='6-pm'>6PM</label></div>
                    </div>
                    <div id='right-day'>
                        <div className='div-inputs'><input name='day' onChange={handleChange} value={'LUNES'} checked={calendario.day === 'LUNES'} className='day-adding' type='radio' id='lunes'></input><label  className='label-check-input' for='lunes'>LUNES</label></div>
                        <div className='div-inputs'><input name='day' onChange={handleChange} value={'MARTES'} checked={calendario.day === 'MARTES'} className='day-adding' type='radio' id='martes'></input><label  className='label-check-input' for='martes'>MARTES</label></div>
                        <div className='div-inputs'><input name='day' onChange={handleChange} value={'MIERCOLES'} checked={calendario.day === 'MIERCOLES'} className='day-adding' type='radio' id='miercoles'></input><label  className='label-check-input' for='miercoles'>MIERCOLES</label></div>
                        <div className='div-inputs'><input name='day' onChange={handleChange} value={'JUEVES'} checked={calendario.day === 'JUEVES'} className='day-adding' type='radio' id='jueves'></input><label  className='label-check-input' for='jueves'>JUEVES</label></div>
                        <div className='div-inputs'><input name='day' onChange={handleChange} value={'VIERNES'} checked={calendario.day === 'VIERNES'} className='day-adding' type='radio' id='viernes'></input><label  className='label-check-input' for='viernes'>VIERNES</label></div>
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
