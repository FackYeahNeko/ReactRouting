
import "./CustomInput.css"

export const CustomInput = ({type, name, placeholder, design, functionChange, functionCheck}) => {

    return (
        <input 
            className={design}
            type={type}
            name={name}
            placeholder={placeholder}
            // petición de ejecución de función en el padre mediante el evento e.
            onChange={(e)=>functionChange(e)}
            //Peticion de disparo para la funcion que comprobará si tenemos errores...al hacer click fuera
            onBlur={(e)=>functionCheck(e)}
        />
        
    )
}