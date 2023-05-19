import React from 'react';
import '../../css/class.add.info.edit.css'
import AddStudent from './add.student';
import AddEvidens from './add.evidens';

const ClassAddInfoEdit = () => {
    return (
        <div className='class-add-information-edit'>
            <div className='class-add-info-title'>
                <button className='class-edit-info-button-title '><i style={{fontSize: '140%'}} class="bi bi-house-door-fill"></i></button>
                <label id='class-edit-info-title'>DIA DE LA MARMOTA</label>
                <button className='class-edit-info-button-title'><i style={{fontSize: '140%'}} class="bi bi-box-arrow-right"></i></button>
            </div>
            <div className='class-add-info-buttons-up'>
                <button className='class-info-general-buttons' id='general'>General</button>
                <button className='class-info-general-buttons' id='asistencia'>Asistencia</button>
                <button className='class-info-general-buttons' id='evidencias'>Evidencias</button>
                <button className='class-info-general-buttons' id='por-alumnos'>Por alumnos</button>
            </div>
            <div className='class-add-info-students'>
                {/*<i id='' class="bi bi-person-fill-x icon-background-edit-info"></i>
                <p id='p-icon'>Aun no has agregado alumnos a esta clase</p>*/}
                <AddEvidens></AddEvidens>
            </div>
            <div className='class-add-info-buttons-edit'>
                <button className='class-info-general-buttons' id='rasgos'>Rasgos</button>
                <button className='class-info-general-buttons' id='add-student'>Añadir alumno</button>
                <button className='class-info-general-buttons' id='periodos'>Periodos</button>
            </div>
        </div>
    );
}

export default ClassAddInfoEdit;
