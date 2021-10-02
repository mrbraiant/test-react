import React from "react";
import { FormSelectStyled } from "../../style/styles";

const FormSelect = props => (
    <FormSelectStyled>
        <form onSubmit={props.callDre}>
            <h5 style={{margin:'0', color:'#f5f5ff'}}>
                <b>Selecionar dre</b>
            </h5>
            <input type="submit" className="btn btn-primary" style={{borderRadius: '15px'}}
                    name="dreName" value="Buscar dre" />
        </form>
    </FormSelectStyled>
);

export default FormSelect;