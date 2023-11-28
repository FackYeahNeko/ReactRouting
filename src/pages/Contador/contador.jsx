import {useState} from "react";

import "./Contador.css"

export const Contador = () => {
    const [clicks, setClick] = useState(0); //Creamos la variable inicial y le ponemos un 0 con el setstate
    const [incremeneto, setIncremeneto] = useState(1); //Creamos la variable inremento y le ponemos un 1 con el setstate

    function handleClick(){
        setClick(clicks + incremento);  // creamos la funion que juntará clicks e incrementos.
    }

    return (
        <main>
          <input
            type="number"
            onChange={(ev) => setIncremento(Number(ev.target.value))}
            value={incremento}
          />
          <button
            onClick={handleClick}
          >
            Clicked {clicks} times
          </button>
        </main>
      );
    }

;
