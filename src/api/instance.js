import axios from "axios";
const instance = axios.create({
    baseURL: 'http://192.168.1.32:4040',
    headers: {
        "Content-Type": "application/json",
    }
})
export default instance