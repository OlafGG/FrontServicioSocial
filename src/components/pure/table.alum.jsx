import React from 'react';
import '../../css/table.alum.css'
import {useState, useEffect} from 'react'

const TableAlum = () => {

    
    useEffect(() => {
        const fechData = async () => {
            const response = await fetch('http://localhost:8000/api/alumnos/')
            const data = await response.json()
            setalumnos(data.message)
        };
        
        fechData()
    }, []);

    const fechas = [{
        fecha: '12-Enero'
    },
    {
        fecha: '14-Enero'
    },
    {
        fecha: '19-Enero'
    },
    {
        fecha: '21-Enero'
    }
    ]

    const [inicio, setInicio] = useState(0);
    const [fin, setFin] = useState(6);
    const [alumnos, setalumnos] = useState(null);
    const  [array, setArray] = useState(fechas.length);
    return (
        <div className='div-table-alum-principal'>
        <button className='button-change-students' onClick={() => {
            setInicio(0);
            setFin(6);
            }
            }>1</button>
        <button className='button-change-students' onClick={() => {
            setInicio(6);
            setFin(12);
            }
            }>2</button>
        <button className='button-change-students' onClick={() => {
            setInicio(12);
            setFin(18);
            }
            }>3</button>
            <table id='table-students'>
                <tr>
                    <th>Alumnos</th>
                        
                    {
                       fechas.map((element, index) => array > 0 ? 
                       <th className='rotate fecha-text'> {element.fecha} </th>
                       : 
                       ''
                       ) 
                    }
                    <th className='rotate'>%Asis</th>
                </tr>
                {
                    alumnos ? 
                    alumnos.map((element, index) => index >= inicio && index < fin  ?  <tr>
                    <th>{element.alum_nombre}</th>
                    {
                       fechas.map((element, index) => 
                       <th className='dummy'> -- </th>) 
                    }
                    <th> -- </th>
                </tr> : '') : ''
                }
            </table>
        </div>
    );
}

export default TableAlum;
