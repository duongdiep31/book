import axios from "axios";
const instance = axios.create({
    baseURL: 'https://book-demo-node.herokuapp.com',
    headers: {
        "Content-Type": "application/json",
    }
})
export default instance