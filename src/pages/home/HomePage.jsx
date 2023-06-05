import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './homepages.css';
import ClassForm from '../../components/pure/form/class.form';
import CardClass from '../../components/pure/card.class';
import EditInfoClass from '../class/edit.info.class';
import TablasInfoCalendary from '../class/tablas.info.calendary';
import Calendar from '../../components/pure/calendary';
import CalendarioClass from '../class/calendario.class';
import CardClassShow from '../class/card.class.show';
import TableRevisionsShow from '../class/table.revisions.show';
import AdviceDeletingClass from '../class/advice.deleting.class';
import EditStudentsClass from '../class/edit.students.class';
import DeletingStudentsAdvice from '../class/deleting.students.advice';
import ConfigAppColor from '../class/config.app.color';
import AddClassCalendary from '../class/add.class.calendary';
import NavbarMenu from '../../components/pure/navbar.menu';


const HomePage = () => {
    
  

    return (
        <div className='main'>
            <div className='principal'>
                
                <div className='fondo'>
                    {
                        
                    } 
                </div>
                
            </div>
            
        </div>
    );
}

export default HomePage;
