import React from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input 
                required={props.obrigatorio} 
                placeholder={props.placeholder} 
                name={props.name} 
                value={props.value} 
                onChange={props.onChange} 
            />
        </div>
    );
}

export default CampoTexto;