import './Contador.css'
import React, { Component } from "react";

import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class Contador extends Component {

    // //Fazer a mesma ( recuperar as informações da propriedade )coisa com construtor
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         numero: props.numeroInicial
    //     }
    // }

    state = {
        // Se o nro não for informado o valor padrão será 0
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    };

    // Incrementar o valor
    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    };
    
    // Decrementa o valor
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    };

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        });
    };

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />

                <PassoForm passo={this.state.passo}
                           setPasso={this.setPasso}/>
                
                <Botoes setInc={this.inc}
                        setDec={this.dec} />
            </div>
        )
    }

}

export default Contador