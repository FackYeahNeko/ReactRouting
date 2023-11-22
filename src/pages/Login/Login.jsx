
import { useState, useEffect } from 'react'
import { CustomInput } from "../../common/CustomInput/CustomInput"
import "./Login.css"

export const Login = () => {

    const [credentials, setCredentials] = useState({
        username : "",
        password: ""
    })

    const InputHandler = (e) => {
        //Este sistema lo vamos a utilizar cuando queramos bindear a un objeto con varias propiedades
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    useEffect(()=>{
        console.log(credentials)
    }, [credentials])

    return (
        <div className="loginDesign">
            Escribe tu usuario:

            <CustomInput 
                type={"text"}
                name={"username"}
                placeholder={""}
                design={"inputDesign"}
                functionChange={InputHandler}
            />
            Escribe tu contraseña:
            
            <CustomInput 
                type={"password"}
                name={"password"}
                placeholder={""}
                design={"inputDesign"}
                functionChange={InputHandler}
            />
        </div>
    )
}