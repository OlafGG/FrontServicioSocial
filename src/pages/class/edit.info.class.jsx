import React from 'react';
import '../../css/edit.info.cass.css'

const EditInfoClass = () => {
    return (
        <div className='principal-edit-class'>
            <div className='titulo-edit-class'>
                <label id='titulo-edit-class'>Nombre de la clase</label>
            </div>
            <div id='inputs-class-edit'>
                <li><input id='checkbox-d1' className='input-description-edit-class' type='checkbox'/><label for='checkbox-d1'>description 1</label></li>
                <li><input id='checkbox-d2' className='input-description-edit-class' type='checkbox'/><label for='checkbox-d2'>description 2</label></li>
                <li><input id='checkbox-d3' className='input-description-edit-class' type='checkbox'/><label for='checkbox-d3'>description 3</label></li>
                <li><input id='checkbox-d4' className='input-description-edit-class' type='checkbox'/><label for='checkbox-d4'>description 4</label></li>
                <li><input id='checkbox-d5' className='input-description-edit-class' type='checkbox'/><label for='checkbox-d5'>description 5</label></li>
                <li><input id='checkbox-d6' className='input-description-edit-class' type='checkbox'/><label for='checkbox-d6'>description 6</label></li>
                
            </div>
            <div id='color-class-edit'>
                <label id='color-edit-class-text'>Elige el color de esta clase: </label>
                <button className='button-color-edit-class' id='rosa'></button>
                <button className='button-color-edit-class' id='morado'></button>
                <button className='button-color-edit-class' id='azulM'></button>
                <button className='button-color-edit-class' id='azulC'></button>
                <button className='button-color-edit-class' id='negro'></button>
            </div>
            <div id='button-div-class-edit'>
                <button className='button-edit-class'>Guardar</button>
                <button className='button-edit-class'>Cancelar</button>
            </div>
        </div>
    );
}

export default EditInfoClass;
