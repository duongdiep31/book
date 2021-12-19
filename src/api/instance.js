import axios from "axios";
const instance = axios.create({
    baseURL: 'Access-Control-Allow-Origin: https://book-nodejs-demo.herokuapp.com',
    headers: {
        "Content-Type": "application/json",
    }
})
export default instance