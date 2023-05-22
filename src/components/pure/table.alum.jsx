import React from 'react';
import '../../css/table.alum.css'
import {useState} from 'react'

const TableAlum = () => {
    const DumYVATA1 = [{
        nombre: 'Uriel Olaf1',
    },
    {
        nombre: '@Roz Ramirez'
    }, {
        nombre: 'Juan Smith'
    },
    {
        nombre: 'Uriel Olaf2',
    },
    {
        nombre: '@Roz Ramirez'
    }, {
        nombre: 'Juan Smith'
    },
    {
        nombre: 'Uriel Olaf3',
    },
    {
        nombre: '@Roz Ramirez'
    }, {
        nombre: 'Juan Smith'
    },
    {
        nombre: 'Uriel Olaf4',
    },
    {
        nombre: '@Roz Ramirez'
    }, {
        nombre: 'Juan Smith'
    },{
        nombre: 'Uriel Olaf5',
    },
    {
        nombre: '@Roz Ramirez'
    }, {
        nombre: 'Juan Smith'
    },
    {
        nombre: 'Uriel Olaf6',
    },
    {
        nombre: '@Roz Ramirez'
    }, {
        nombre: 'Juan Smith'
    },
    {
        nombre: 'Uriel Olaf7',
    },
    {
        nombre: '@Roz Ramirez'
    }, {
        nombre: 'Juan Smith'
    },
    {
        nombre: 'Uriel Olaf8',
    },
    {
        nombre: '@Roz Ramirez'
    }, {
        nombre: 'Juan Smith'
    },
    {
        nombre: 'Uriel Olaf9',
    },
    {
        nombre: '@Roz Ramirez'
    }, {
        nombre: 'Juan Smith'
    },
    {
        nombre: 'Uriel Olaf10',
    },
    {
        nombre: '@Roz Ramirez'
    }, {
        nombre: 'Juan Smith'
    },
    {
        nombre: 'Uriel Olaf11',
    },
    {
        nombre: '@Roz Ramirez'
    }, {
        nombre: 'Juan Smith'
    },
    {
        nombre: 'Uriel Ola12f',
    },
    {
        nombre: '@Roz Ramirez'
    }, {
        nombre: 'Juan Smith'
    }]

    const [inicio, setInicio] = useState(0);
    const [fin, setFin] = useState(8);

    return (
        <div className='div-table-alum-principal'>
        <button onClick={() => {
            setInicio(0);
            setFin(8);
            }
            }>1</button>
        <button onClick={() => {
            setInicio(8);
            setFin(16);
            }
            }>2</button>
        <button onClick={() => {
            setInicio(16);
            setFin(24);
            }
            }>3</button>
            <table id='table-students'>
                <tr>
                    <th>Alumnos</th>
                    <th className='rotate'>Fecha</th>
                    <th className='rotate'>%Asis</th>
                </tr>
                {
                    DumYVATA1.map((element, index) => index >= inicio && index < fin  ?  <tr>
                    <th>{element.nombre}</th>
                    <th> -- </th>
                    <th> -- </th>
                </tr> : '')
                }
            </table>
        </div>
    );
}

export default TableAlum;
