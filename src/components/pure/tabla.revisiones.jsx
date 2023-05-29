import React from 'react';
import '../../css/table.reviciones.css'


const TablaRevisiones = () => {

    const actividades = [
        {
            trabajo: 'Tarea 1',
            materia: 'Introduccion a la programacion',
            dato1: 'Grupo 33',
            dato2: 'Ingenieria de Software',
            numero_revicion: 4
        },
        {
            trabajo: 'Tarea 3',
            materia: 'Introduccion a las TI',
            dato1: 'Grupo 31',
            dato2: 'Licenciatura en informatica',
            numero_revicion: 7
        },
        {
            trabajo: 'Tarea 9',
            materia: 'Redes',
            dato1: 'Grupo 34',
            dato2: 'Ingenieria en telecomunicaciones',
            numero_revicion: 9
        },
        {
            trabajo: 'Tarea 1',
            materia: 'Introduccion a la programacion',
            dato1: 'Grupo 33',
            dato2: 'Ingenieria de Software',
            numero_revicion: 4
        },
        {
            trabajo: 'Tarea 3',
            materia: 'Introduccion a las TI',
            dato1: 'Grupo 31',
            dato2: 'Licenciatura en informatica',
            numero_revicion: 7
        },
        {
            trabajo: 'Tarea 9',
            materia: 'Redes',
            dato1: 'Grupo 34',
            dato2: 'Ingenieria en telecomunicaciones',
            numero_revicion: 9
        }
    ]

    return (
        <div id='table-div-principal'>
            <table id='table-revisions-principal'>
                <tr>
                    <th id='title-table-revision' colSpan={5}>
                        Reviciones Pendientes
                    </th>
                </tr>
                <tr>
                    <th className='title-table-th'>Trabajo</th>
                    <th className='title-table-th'>Materia</th>
                    <th className='title-table-th'>Dato 1</th>
                    <th className='title-table-th'>Dato 2</th>
                    <th className='title-table-th'>No. Revisados</th>
                </tr>
                
                {
                    actividades.map((element) => 
                    <tr>
                        <td className='data-td-show border-left-table'>{element.trabajo}</td>
                        <td className='data-td-show'>{element.materia}</td>                            <td className='data-td-show'>{element.dato1}</td>
                        <td className='data-td-show'>{element.dato2}</td>
                        <td className='data-td-show border-right-table'>{element.numero_revicion}</td>
                    </tr>
                    )
                }
            </table>
        </div>
    );
}

export default TablaRevisiones;
