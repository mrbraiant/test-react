import React, { Component } from "react";
import FormSelect from './forms/formSelect';
import SelectTabela from "./SelectTabela";

export default class Select extends Component{
    state = {
        results: [],
        selectDre: ''
    }

    callDre = async (e) =>{
        e.preventDefault();
        const api_call = await fetch(`https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/diretorias/`);
        const data = await api_call.json();
            
        console.log(data);
        this.setState({ results: data.results });
        //console.log(this.state.results);
        //console.log(data.results[0].diretoria);
    }

    render(){           
        return(
            <div>
                <div>
                    <h5 style={{textAlign: 'center',
                                margin:'0',
                                color:'white',
                                backgroundColor:'#0000ff',
                                width:'100%',
                                borderStyle: 'inset',
                                borderColor: '#0066cc'}}>
                                <b>Select</b>
                    </h5>
                    <FormSelect callDre={this.callDre} />
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <select style={{width: '50%', height:'46px', margin:'0px 0 0 1px', marginTop: '0px',
                     borderRadius: '15px', border: '2px ridge #64b5f6'}}
                            onChange={e=> {let value = e.target.value; this.setState({selectDre: value}, () => console.log(this.state.selectDre)) }}>
                        {
                            this.state.results.map(result => 
                                <option key={result.dre}  label={result.diretoria}>
                                    {result.dre}</option>)                          
                        }                        
                    </select>
                </div>
                <SelectTabela selectDre={this.state.selectDre}/>
            </div>
        );
    }
}