import React from "react";
import { FormSelectTabelaStyled } from "../../style/styles";

const FormSelectTabela = props => (
    <FormSelectTabelaStyled>
        <form onSubmit={props.getDre}>
            <input type="submit" className="btn btn-outline-primary" 
                    style={{borderRadius: '15px', marginTop:'-32px'}}
                    name="iDre" value="Gerar Tabela" />
        </form>
    </FormSelectTabelaStyled>
);

export default FormSelectTabela;