import { Provider } from "../interfaces/provider";
import api from "./axios";


export const getAllProviders = async () => {
    try {
        const response = await api.get("/products/provider");
        return response.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
 };
export const createProvider = async (data: Provider) => {
    try {
        const response = await api.post("/products/provider", data);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
};
 export const getProviderById = async (id: string) => {
    try {
        const response = await api.get(`/products/provider/${id}`);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
 }

 export const updateProvider = async (id: string, data: Provider) => {
    try {
        console.log("este es el id");
        console.log(id);
        console.log("este es el data");
        const data2 = {
            ProviderName: data.ProviderName,
            mail: data.mail,
            mobileNumber: data.mobileNumber,
            address: data.address,
            website: data.website

        }
        console.log(data2);
        const response = await api.patch(`/products/provider/${id}`, data2);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
 };

    export const deleteOneProvider = async (id: string) => {
        try {
            const response = await api.delete(`/products/provider/${id}`);
            return response.data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    };