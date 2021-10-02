import React from "react";
import { FormStyled } from "../../style/styles";

const Form = props => (
    <FormStyled>
        <form onSubmit={props.getDre}>
            <h5 style={{margin:'0',
                        color:'#f5f5ff'}}>
                <b>Pesquisar dre</b></h5>
            <input type="text" style={{margin: '10px', borderRadius: '10px'}}
                    name="dreName" placeholder="Digite a DRE ou click -=>" />
            <button className="btn btn-primary" style={{borderRadius: '15px', marginTop: '-6px'}}>Buscar</button>
        </form>
    </FormStyled>
);

export default Form;