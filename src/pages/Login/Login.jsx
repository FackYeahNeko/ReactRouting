
import { useState, useEffect } from 'react'
import { CustomInput } from "../../common/CustomInput/CustomInput"
import "./Login.css"
import { loginMe } from '../../services/apiCalls'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate()

    //creamos la variable para los propierties de usuario y password

    const [credentials, setCredentials] = useState({
        username : "",
        password: ""
    })
    //creamos la variable para el mensaje de usuario y password

    const [mensaje, setMensaje] = useState("")

    // creamos una variable enseñar un mensaje de error.
    const [mensajeError, setMensajeError] = useState("")

    //Funcion que vamos a pasar al hijo, vista desde aqui el padre (login.jsx)
    const InputHandler = (e) => {
        //Este sistema lo vamos a utilizar cuando queramos bindear a un objeto con varias propiedades
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    // useEffect(()=>{
    //     console.log(credentials)
    // }, [credentials])

    //creamos la variable que usaremos para logearnos.
    const logMe = () => {
        //aqui llamamos la función loginMe y le pasamos las credenciales
        loginMe(credentials)
            .then(
                resultado => {
                    console.log(resultado)
                    setMensaje(`Hola de nuevo ${resultado.data.firstName} ${resultado.data.lastName}...`) //aqui rescata los valores de la respuesta de login para la función
                    //Una vez ha venido correctamente la respuesta, enviamos al user a Home
                    setTimeout(()=>{
                        navigate("/")
                    },2000)
                }   
            )
            .catch(error => {
                setMensajeError(error.response.data.message) //en caso de que la respuesta no sea correcta enviamos el mensaje de error.
            })

    }

    return (
        <div className="loginDesign">
            {
                mensaje !== ""

                ? (<div>{mensaje}</div>)

                : (<>
                Escribe tu nickname:

                <CustomInput 
                    type={"text"}
                    name={"username"}
                    placeholder={""}
                    design={"inputDesign"}
                    //Pasamos la función al hijo desde aqui (el padre)
                    functionChange={InputHandler}
                />
                Escribe tu contraseña:
                
                <CustomInput 
                    type={"password"}
                    name={"password"}
                    placeholder={""}
                    design={"inputDesign"}
                    //Pasamos la función al hijo desde aqui (el padre)
                    functionChange={InputHandler}
                />
                <div>{mensajeError}</div>
                <div className='buttonDesign' onClick={logMe}>Log me!</div></>)
            }
            
        </div>
    )
}