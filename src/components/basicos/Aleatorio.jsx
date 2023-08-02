import React from "react"

export default (props) => {
    const {min, max} = props;
    const num = Math.floor(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <strong>Numero aleatório {num}</strong>
        </div>
    );
};