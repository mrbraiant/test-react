import React, { Component } from "react";
import { FootStyled } from "../style/styles";

export default class Footer extends Component{
    render(){
        return(
        <FootStyled>
            <footer style={{borderStyle: 'inset', borderColor: '#cccccc'}}>
                Secretaria Municipal de Educação - SME
            </footer>
        </FootStyled>
        );
    }
}