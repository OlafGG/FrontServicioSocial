import React from 'react';

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
            numero_revicion: 4
        }
    ]

    return (
        <div>
            <table>
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
                        <td>{element.trabajo}</td>
                        <td>{element.materia}</td>                            <td>{element.dato1}</td>
                        <td>{element.dato2}</td>
                        <td>{element.numero_revicion}</td>
                    </tr>
                    )
                }
            </table>
        </div>
    );
}

export default TablaRevisiones;
