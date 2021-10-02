import React, { Component } from "react";
import FormSelectTabela from './forms/formSelectTabela';
import './../style/table.css';

export default class SelectTabela extends Component{
    state={
        results: []
    }

    getDre = async (e) => {
        const iDre = this.props.selectDre;
        const iniciais_diretoria_regional = iDre; 
        e.preventDefault();
   
        const api_call = await fetch(`https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/smeescolas/${iniciais_diretoria_regional}`); 
        const data = await api_call.json();

        //console.log(dreName);
        //console.log(data.results[0].tipoesc);

        this.setState({ results: data.results });
        console.log(this.state.results);
    }

        
    render(){
        return(
            <div>
                <FormSelectTabela getDre={this.getDre} />
                { this.state.results.map((result, index) => {                    
                    return (
                        <div>
                            <table>
                                <thead>                                                                   
                                    <tr key={index}> 
                                        <th>{ /* result.dre */ }</th>
                                        <th>{ result.faixa }</th>    
                                    </tr>   
                                </thead>
                                <tbody>
                                    <tr key={result.dre}>
                                        <td>{ result.tipoesc }</td>
                                        <td>{ result.count }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )                    
                }) }
            </div>
        );
    }
}