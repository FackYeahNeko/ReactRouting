import { useState } from "react"; //importas inicialmente la funcionalidad de usestate de react

function Button()  // creas el boton
{  
  const [clicks, setClicks] = useState(0);  // seteas los clicks iniciales
  const [increaseBy, setInc] = useState(1);  // setea el valor de incremento
  console.log("increaseBy", increaseBy); // aqui enseñas en consola el valor 

  function handleClick() //creas la función handleClick
  {
    setClicks(clicks + increaseBy); // aqui usas el setclick, para cambiar la variable de clicks, y añadir el valor de incremento 
  }
  return (
    <main>
      <input
        type="number" //creas el tipo de input , number limita el valor a numeros solo.
        onChange={(ev) => setInc(Number(ev.target.value))} //cuando detecta cambios en el input, se ejecuta la función setInc
        value={increaseBy}
      />
      <button
        onClick={handleClick} //llamas a la funcion handleClick cuando haces click (on click)
        >
        Clicked {clicks} times
      </button>
    </main>
  );
}

export default Button; // exportamos el componente Button