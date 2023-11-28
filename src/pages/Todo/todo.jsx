import { useState } from "react"; //importas inicialmente la funcionalidad de usestate de react

import "./todo.css"

const TodoEstadoInicial = [
{
    ID: 1,
    nombre: "Juan",
    completado: false,
},
{
    ID: 2,
    nombre: "Pedro",
    completado: false,
},
{
    ID: 3,
    nombre: "Maria",
    completado: false,
}];

function todo () {
    const [todo, setTodo] = useState(TodoEstadoInicial); // seteas los todos iniciales



    
}



