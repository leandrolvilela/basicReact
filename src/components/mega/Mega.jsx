import './Mega.css';
import React, { useState } from "react";

export default props => {

    function gerarNumero(qtdeNro) {

        const numeros = [];
        
        for (let i = 0; i < qtdeNro;) {
    
            let numero = Math.floor(Math.random() * (60 - 1)) + 1;
            
            if (numeros.indexOf(numero) === -1) {
                numeros.push(numero);
                i += 1
            }
    
        }
        
        numeros.sort((a,b) => a - b);
        return numeros;
        
    }
 
    
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumero(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return(
        <div className='Mega'>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>

            <div>
                <label>Qtde de Números</label>
                <input  min="6"
                        max="15"
                        type="number" 
                        value={qtde} 
                        onChange={(e) => {
                            setQtde(+e.target.value)
                            setNumeros(gerarNumero(+e.target.value))
                        }}
                    />
            </div>

            <button onClick={e => setNumeros(gerarNumero(qtde))} >
                Gerar Números
            </button>
            
        </div >
    )
}