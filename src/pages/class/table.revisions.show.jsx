import React from 'react';
import TablaRevisiones from '../../components/pure/tabla.revisiones';
import '../../css/table.revisions.show.css';


const TableRevisionsShow = () => {
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

            </div>
            
        </div>
    );
}

export default TableRevisionsShow;
