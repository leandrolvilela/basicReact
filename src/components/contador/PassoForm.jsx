import React from "react";

export default props => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput"
                type="number"
                value={props.passo}
                //Pega o evento da tag HTML, que nesse caso é o <input> 
                // e.target.value (valor do input do HTML)
                //o simbolo + converte string em valor numérico
                onChange={e => props.setPasso(+e.target.value)} />
        </div>
    );
};