import React from 'react';
import { useState, useEffect } from 'react';
import '../../css/table.students.calif.css'


const TableStudents = () => {

    const [students, setstudents] = useState();

    useEffect(() => {
        const fechData = async () => {
            const response = await fetch('http://localhost:8000/api/alumnos/')
            const data = await response.json()
            setstudents(data.message)
        };
        
        fechData()
    }, []);


    const parcial = [{
        id: 1,
        descripcion: 'Parcial Uno'
    },
    {
        id: 2,
        descripcion: 'Parcial Dos'
    },
    {
        id:3,
        descripcion: 'Parcial Tres'
    }
    ]

    const calif1 = [10, 20, 30]
    const calif2 = [1, 2, 3]
    return (
        <div className='div-tabla-alumnos-principal'>
            <table>
                <tr>
                <th id='periodo'>Periodo</th>
                {
                    parcial.map((element, index) => index === 0 ? 
                    <th id='descripcion1' colSpan={5}>{element.descripcion}</th> : 
                    
                        index === 1 ? <th id='descripcion2' colSpan={5}>{element.descripcion}</th> : <th id='descripcion3' colSpan={5}>{element.descripcion}</th>
                    
                    )
                }
                <th id='FN'>FN</th>
                </tr>
                <tr>
                    <th>
                        Rasgos
                    </th>
                    {
                    parcial.map((element) =>
                    <> 
                        <td>
                            Act
                        </td>
                        <td>
                            Tar
                        </td>
                        <td>
                            Pry
                        </td>
                        <td>
                            Exm
                        </td>
                        <td>
                            Clf
                        </td>
                    </>
                    )
                    }
                </tr>
                {
                    students ?
                    students.map((element, index) => 
                    <tr>
                    
                        <th id='name-table-rasgos'>
                            {element.alum_nombre}
                        </th>
                        {
                            parcial.map((elementParcial, index) => 
                        <>
                        <td className='title-table-rasgos renderized'>
                            {
                                element.promedio_parcial_1
                            }
                        </td>
                        <td className='title-table-rasgos renderized'>
                            {
                                element.promedio_parcial_2
                            }
                        </td>
                        <td className='title-table-rasgos'>
                            --                            
                        </td>
                        <td className='title-table-rasgos'>
                            --
                        </td>
                        <td className='title-table-rasgos'>
                            --
                        </td>
                        </>)
                        }
                        <td className='title-table-rasgos'>
                            --
                        </td>
                    </tr>
                    ) :  ''
                }
            </table>
        </div>
    );
}

export default TableStudents;
