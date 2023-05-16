import React from 'react';
import '../../css/class.add.info.edit.css'

const ClassAddInfoEdit = () => {
    return (
        <div className='class-add-information-edit'>
            <div className='class-add-info-title'>
                <button className='class-edit-info-button-title'>home</button>
                <label id='class-edit-info-title'>DIA DE LA MARMOTA</label>
                <button className='class-edit-info-button-title'>exit</button>
            </div>
            <div className='class-add-info-buttons-up'>
                <button className='class-info-general-buttons' id='general'>Genera</button>
                <button className='class-info-general-buttons' id='asistencia'>Asistencia</button>
                <button className='class-info-general-buttons' id='evidencias'>Evidencias</button>
                <button className='class-info-general-buttons' id='por-alumnos'>Por alumnos</button>
            </div>
            <div className='class-add-info-students'>

            </div>
            <div className='class-add-info-buttons-edit'>

            </div>
        </div>
    );
}

export default ClassAddInfoEdit;
