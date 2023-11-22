
import { useState, useEffect } from 'react'
import { CustomInput } from "../../common/CustomInput/CustomInput"
import "./Register.css"

export const Register = () => {

    const [credentials, setCredentials] = useState({
        username : "",
        password: "",
        confirmPassword: "",
        email: "",
        name: "",
        age: "" 
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
            Escribe tu Usuario:

            <CustomInput 
                type={"text"}
                name={"username"}
                placeholder={""}
                design={"inputDesign"}
                functionChange={InputHandler}
            />
            Añadir Contraseña:

            <CustomInput 
                type={"password"}
                name={"password"}
                placeholder={""}
                design={"inputDesign"}
                functionChange={InputHandler}
            />
            Repetir Contraseña:

            <CustomInput 
                type={"password"}
                name={"confirmpassword"}
                placeholder={""}
                design={"inputDesign"}
                functionChange={InputHandler}
            />
            Añadir tu correo:

            <CustomInput 
                type={"text"}
                name={"email"}
                placeholder={""}
                design={"inputDesign"}
                functionChange={InputHandler}
            />
            Añadir tu nombre:

            <CustomInput 
                type={"text"}
                name={"name"}
                placeholder={""}
                design={"inputDesign"}
                functionChange={InputHandler}
            />
            Añadir tu edad:

            <CustomInput 
                type={"text"}
                name={"age"}
                placeholder={""}
                design={"inputDesign"}
                functionChange={InputHandler}
            />
        </div>
    )
}