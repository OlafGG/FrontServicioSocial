import React from 'react';
import TablaRevisiones from '../../components/pure/tabla.revisiones';
import '../../css/table.revisions.show.css';
import CardClassShowRevisions from '../../components/pure/card.class.show.revisions';


const TableRevisionsShow = () => {

    const tarjetas = [{
        nombre: 'Introduccion a la programacion',
        grupo: 'Grupo 33',
        carrera: 'Ingenieria de software'
    },
    {
        nombre: 'Introduccion a las TI',
        grupo: 'Grupo 34',
        carrera: 'LATI'
    },
    {
        nombre: 'Base de Datos',
        grupo: 'Grupo 31',
        carrera: 'Licenciatura en Informatica'
    },
    {
        nombre: 'Redes',
        grupo: 'Grupo 33',
        carrera: 'Ingenieria de software'
    }
    
    ]

    return (
        <div id='div-revisiones-show-principal'>
            <div id='title-revision-show'>
                <label>Pendientes</label>
            </div>
            <div id='div-profe-button-show'>
                <p id='title-name'>Docente: Dieguito </p>
                <button id='button-show-materies'>Mostrar todas las materias</button>
            </div>
            <div id='div-table-revision'>
                <TablaRevisiones></TablaRevisiones>
            </div>
            <div id='cards-class-reviciones-filter'>
                {
                    tarjetas.map((element) => 
                    <CardClassShowRevisions nombre={element.nombre} grupo={element.grupo} carrera={element.carrera}></CardClassShowRevisions>
                    )
                }
            </div>
            
        </div>
    );
}

export default TableRevisionsShow;
