import React, { Component } from "react";
import { HeadStyled } from "../style/styles";

export default class Header extends Component{
    render(){

        return(
            <HeadStyled>
                <header style={{borderStyle: 'inset', borderColor: '#0000ff'}}>
                    Teste de ReactJS - AMcomE
                </header>
            </HeadStyled>
        );
    }
}