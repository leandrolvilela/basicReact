import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho
                nome="Filho 1"
                idade={20}
                nerd={true}
            />
            <DiretaFilho
                nome="Filho 2"
                idade={10}
                nerd={true}
            />
            <DiretaFilho
                nome="Filho 3"
                idade={5}
                nerd={false}
            />
        </div>
    )
}