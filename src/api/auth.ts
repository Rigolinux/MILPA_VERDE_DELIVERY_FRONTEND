import api from "./axios";
import { credeails } from "../interfaces/credentias";

export const login = async (data: credeails) => {
    try {
        const response = await api.post("/auth/login", data);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }

};

export const register = async (data: credeails) => {
    try {
        const response = await api.post("/auth/register", data);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
};