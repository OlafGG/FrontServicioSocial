import React from 'react';
import '../../css/table.students.calif.css'


const TableStudents = () => {

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
    const students = [{
        nombre: 'Uriel Olaf'
    },
    {
        nombre: 'Daniel Aros'
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
                    students.map((element, index) => 
                    <tr>
                    
                        <th id='name-table-rasgos'>
                            {element.nombre}
                        </th>
                        {
                            parcial.map((element, index) => 
                        <>
                        <td className='title-table-rasgos'>
                            {
                                calif1[index]
                            }
                        </td>
                        <td className='title-table-rasgos'>
                            {
                                calif2[index]
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
                    )
                }
            </table>
        </div>
    );
}

export default TableStudents;
