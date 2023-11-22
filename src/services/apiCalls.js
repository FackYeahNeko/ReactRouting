
import axios from 'axios'
//Aqio van los links para las peticiones a las api

export const bringAllCharacters = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=8`)
}

export const loginMe = async (body) => {

    return await axios.post(`https://dummyjson.com/auth/login`, body)
}