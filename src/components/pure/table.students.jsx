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
    return (
        <div className='div-tabla-alumnos-principal'>
            <table>
                <tr>
                <th>Periodo</th>
                {
                    parcial.map((element) => 
                    <th colSpan={5}>{element.descripcion}</th>
                    )
                }
                <th>FN</th>
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
                            parcial.map(element => 
                        <>
                        <td className='title-table-rasgos'>
                            --
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
