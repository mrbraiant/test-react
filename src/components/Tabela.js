import React, { Component } from "react";
import Form from './forms/form';
import './../style/table.css';

export default class Tabela extends Component {
    state = {
        results: []
    }

    getDre = async (e) => {
        const dreName = e.target.elements.dreName.value.toUpperCase();
        const API_KEY = dreName; 
        e.preventDefault();

        const api_call = await fetch(`https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/smeescolas/${API_KEY}`); 
        const data = await api_call.json();

        //console.log(dreName);
        //console.log(data.results[0].tipoesc);
        this.setState({ results: data.results });
        console.log(this.state.results);
    }

    render(){
        return(
            <div >
                <h5 style={{textAlign: 'center',
                            margin:'0',
                            color:'white',
                            backgroundColor:'#0000c6',
                            width:'100%',
                            borderStyle: 'inset', 
                            borderColor: '#0066cc'}}>
                            <b>Tabela</b></h5>

                <Form getDre={this.getDre} />
                { this.state.results.map((result, index) => {
                    return (
                        <div>
                            <table style={{borderStyle: 'groove', borderRadius: '7px'}}>                            
                                <thead> 
                                    <tr key={index}>
                                        <th>{/* {result.dre} */}</th>
                                        <th>{result.faixa}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={index}>
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
