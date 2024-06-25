import axios from "axios";
import { configDotenv } from "dotenv";
configDotenv()

const api = axios.create({
    baseURL : process.env.API_URL || 'http://localhost:8080'
}) 

console.log(api);

export default api