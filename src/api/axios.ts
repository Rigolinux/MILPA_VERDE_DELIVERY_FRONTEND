import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    //baseURL: "http://localhost:3000",
    // baseURL: "https://milpaverdedeliverybackend-production.up.railway.app",

    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token"),
    }
});

export default api;