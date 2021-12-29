import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        "Content-Type": "application/json",
    }
})
// https://book-demo-node.herokuapp.com
export default instance
