import React, { useState, useEffect } from "react";

export const Main = () => {
    const [number, setNumber] = useState(0);
    const [pokemonName, setPokemonName] = useState("");

    let valueNumber = 0;

    const plusState = () => { setNumber((prev) => prev + 1) };
    const minusState = () => { setNumber((prev) => Math.max(0, prev - 1)) };

    return (
        <>
            <div>
                {number}
            </div>
            <div className="button">
                <button onClick={plusState} >button</button>
                <button onClick={minusState} >button2</button>
            </div>





            <div>

            </div>
        </>);



};