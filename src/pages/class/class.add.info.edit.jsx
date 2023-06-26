import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/class.add.info.edit.css'
import AddStudent from './add.student';
import AddEvidens from './add.evidens';
import TableAlum from '../../components/pure/table.alum';
import TableStudents from '../../components/pure/table.students';
import PorAlumnosClass from './porAlumnos.class';
import RasgosEditInfo from './rasgos.edit.info';
import EditStudentsClass from './edit.students.class';
import DeletingStudentsAdvice from './deleting.students.advice';

const ClassAddInfoEdit = () => {

    const [history, sethistory] = useState([true, false, false, false, false, false, false]);
    const [before, setbefore] = useState(0);
    const [message, setmessage] = useState();
    const navegar = useNavigate();



    const handleClick = (index, message) => {
        const nuevosComponentes = [...history];
        nuevosComponentes[index] = true;
        nuevosComponentes[before] = false;
        setbefore(index);
        sethistory(nuevosComponentes);
        setmessage(message)
      };

    return (
        <div className='class-add-information-edit'>
            <div className='class-add-info-title'>
                <button className='class-edit-info-button-title ' onClick={() => navegar('/')}><i style={{fontSize: '140%'}} class="bi bi-house-door-fill"></i></button>
                <label id='class-edit-info-title'>Introduccion a la Progrmacion</label>
                <button className='class-edit-info-button-title'><i style={{fontSize: '140%'}} class="bi bi-box-arrow-right"></i></button>
            </div>
            <div className='class-add-info-buttons-up'>
                <button className='class-info-general-buttons' id='general' onClick={() => handleClick(0, '')}>General</button>
                <button className='class-info-general-buttons' id='asistencia' onClick={() => handleClick(1, '')}>Asistencia</button>
                <button className='class-info-general-buttons' id='evidencias' onClick={() => handleClick(2, '')
}>Evidencias</button>
                <button className='class-info-general-buttons' id='por-alumnos' onClick={() => handleClick(3, '')}>Por alumnos</button>
            </div>
            <div className='class-add-info-students'>
                {history[0] && <TableStudents/>}
                {history[1] && <TableAlum/>}
                {history[2] && <AddEvidens/>}
                {history[3] && <PorAlumnosClass/>}
                {history[4] && <AddStudent handleclick={handleClick}/>}
                {history[5] && <EditStudentsClass handleClick={handleClick}/>}
                {history[6] && <DeletingStudentsAdvice alumno={message} handleclick={handleClick}/>}
                
            </div>
            <div className='class-add-info-buttons-edit'>
                <button className='class-info-general-buttons' id='rasgos' onClick={() => navegar('/rasgos')}>Rasgos</button>
                <button className='class-info-general-buttons' id='add-student' onClick={() => handleClick(4, '')}>Añadir alumno</button>
                <button className='class-info-general-buttons' id='periodos'>Periodos</button>
                <button className='class-info-general-buttons' id='editStudents' onClick={() => handleClick(5, '')}>Editar Alumnos</button>
            </div>
        </div>
    );
}

export default ClassAddInfoEdit;
