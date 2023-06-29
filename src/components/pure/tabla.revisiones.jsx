import React from 'react';
import { useState, useEffect } from 'react';
import '../../css/table.reviciones.css'


const TablaRevisiones = () => {


    const [actividades, setactividad] = useState(null);

    useEffect(() => {
        const fechData = async () => {
            const response = await fetch('http://localhost:8000/api/tareas/');
            const data = await response.json()
            setactividad(data.message)
        };
        fechData()
        
    }, []);
    return (
        <div id='table-div-principal'>
        {
            console.log(actividades)
        }
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
                    actividades ? 
                    actividades.map((element) => 
                    <tr>
                        <td className='data-td-show border-left-table'>{element.tarea_name}</td>
                        <td className='data-td-show'>{element.tarea_materia}</td>                            
                        <td className='data-td-show'>{element.grupo}</td>
                        <td className='data-td-show'>{element.tarea_descripcion}</td>
                        <td className='data-td-show border-right-table'>{element.tarea_evidencia    }</td>
                    </tr>
                    ) : ''
                }
            </table>
        </div>
    );
}

export default TablaRevisiones;
