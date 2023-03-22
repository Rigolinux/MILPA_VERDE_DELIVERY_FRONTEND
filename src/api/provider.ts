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

