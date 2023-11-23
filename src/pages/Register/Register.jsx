
import { useState, useEffect } from 'react'
import { CustomInput } from "../../common/CustomInput/CustomInput"
import "./Register.css"
import { validate } from '../../services/useful';

export const Register = () => {

    const [credentials, setCredentials] = useState({
        username : "",
        password: "",
        confirmPassword: "",
        email: "",
        name: "",
        age: "" 
    })

    const [credentialsError, setCredentialsError] = useState({
        usernameError : "",
        passwordError: "",
        confirmPasswordError: "",
        emailError: "",
        nameError: "",
        ageError: "" 
    })

    const InputHandler = (e) => {
        //Este sistema lo vamos a utilizar cuando queramos bindear a un objeto con varias propiedades
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const checkError = (e) => {

        let error = ""
    
        error = validate(e.target.name, e.target.value)
    
        setCredentialsError((prevState) => ({
            ...prevState,
            [e.target.name + 'Error']: error
        }));
      }

    useEffect(()=>{
        console.log(credentials)
    }, [credentials])

    return (
        <div className="registerDesign">
            Escribe tu Usuario:

            <CustomInput 
                type={"text"}
                name={"username"}
                placeholder={"Nombre de usuario"}
                design={"inputDesign"}
                functionChange={InputHandler}
                functionCheck={checkError}
            />
            <div>{credentialsError.usernameError}</div>

            Añadir Contraseña:

            <CustomInput 
                type={"password"}
                name={"password"}
                placeholder={"Contraseña"}
                design={"inputDesign"}
                functionChange={InputHandler}
                functionCheck={checkError}
            />
            <div>{credentialsError.passwordError}</div>
            Repetir Contraseña:

            <CustomInput 
                type={"password"}
                name={"confirmpassword"}
                placeholder={"Repite tu contraseña"}
                design={"inputDesign"}
                functionChange={InputHandler}
                functionCheck={checkError}
            />
            <div>{credentialsError.confirmPasswordError}</div>
            Añadir tu correo:

            <CustomInput 
                type={"email"}
                name={"email"}
                placeholder={"Correo electrónico"}
                design={"inputDesign"}
                functionChange={InputHandler}
                functionCheck={checkError}
            />
            <div>{credentialsError.emailError}</div>
            Añadir tu nombre:

            <CustomInput 
                type={"text"}
                name={"name"}
                placeholder={"Nombre"}
                design={"inputDesign"}
                functionChange={InputHandler}
                functionCheck={checkError}
            />
            <div>{credentialsError.nameError}</div>
            Añadir tu edad:

            <CustomInput 
                type={"text"}
                name={"age"}
                placeholder={"Edad"}
                design={"inputDesign"}
                functionChange={InputHandler}
                functionCheck={checkError}
            />
            <div>{credentialsError.ageError}</div>
        </div>
    )
}