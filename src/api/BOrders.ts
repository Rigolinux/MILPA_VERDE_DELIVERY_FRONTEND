import { BOrders } from "../interfaces/BOrders";
import api from "./axios";

export const getAllBOrders = async () => {
    try {
        const response = await api.get("/products/bordersheaders");
        return response.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
};

export const createBOrder = async (data:BOrders ) => {
    try {
        const response = await api.post("/products/order", data);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
};

export const getBOrderHeaderById = async (id: string) => {
    try {
        const response = await api.get(`/products/bordersheaders/${id}`);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }

}

export const 