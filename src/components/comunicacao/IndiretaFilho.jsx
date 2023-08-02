import React from "react";

export default props => {
    const callBack = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20) + 50)
    return (
        <div>
            <div>Filho</div>
            {/* * Versão 1
            <button onClick={
                    function (e) {
                        props.quandoClicar('João', 53, true)
                    }
            }> */}
            <button onClick={ e => callBack('João', gerarIdade(), true) }>
                Fornecer Informações
            </button>            
        </div>
    )
}