import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/class.add.info.edit.css'
import AddStudent from './add.student';
import AddEvidens from './add.evidens';
import TableAlum from '../../components/pure/table.alum';
import TableStudents from '../../components/pure/table.students';
import PorAlumnosClass from './porAlumnos.class';

const ClassAddInfoEdit = () => {

    const [history, sethistory] = useState(null);
    const navegar = useNavigate();


    return (
        <div className='class-add-information-edit'>
            <div className='class-add-info-title'>
                <button className='class-edit-info-button-title '><i style={{fontSize: '140%'}} class="bi bi-house-door-fill"></i></button>
                <label id='class-edit-info-title'>Introduccion a la Progrmacion</label>
                <button className='class-edit-info-button-title'><i style={{fontSize: '140%'}} class="bi bi-box-arrow-right"></i></button>
            </div>
            <div className='class-add-info-buttons-up'>
                <button className='class-info-general-buttons' id='general'>General</button>
                <button className='class-info-general-buttons' id='asistencia'>Asistencia</button>
                <button className='class-info-general-buttons' id='evidencias' onClick={() => sethistory('/classEditInfo/evidencias')
                }>Evidencias</button>
                <button className='class-info-general-buttons' id='por-alumnos'>Por alumnos</button>
            </div>
            <div className='class-add-info-students'>
                {/*<i id='' class="bi bi-person-fill-x icon-background-edit-info"></i>
                <p id='p-icon'>Aun no has agregado alumnos a esta clase</p>*/}
                {/*<AddEvidens></AddEvidens>*/}
                {/*<TableAlum></TableAlum>*/}
                {/*<TableStudents></TableStudents>*/}
                {
                    navegar(history)
                }
                {/*<PorAlumnosClass></PorAlumnosClass>*/}
            </div>
            <div className='class-add-info-buttons-edit'>
                <button className='class-info-general-buttons' id='rasgos' onClick={() => sethistory('/classEditInfo/tableAlums')}>Rasgos</button>
                <button className='class-info-general-buttons' id='add-student'>Añadir alumno</button>
                <button className='class-info-general-buttons' id='periodos'>Periodos</button>
            </div>
        </div>
    );
}

export default ClassAddInfoEdit;
