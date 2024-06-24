import axios from "axios";

const api = axios.create({
    baseURL : process.env.API_URL || 'http://localhost:8080'
}) 


console.log( "l'instance est : " , api)
console.log( "la configuration est : " , api.defaults)


export default api