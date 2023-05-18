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
        const providers = await getAllProviders();
        const isDuplicateEmail = providers.some((provider: Provider) => provider.mail === data.mail);

        if (isDuplicateEmail) {
            throw new Error("El proveedor con este correo ya existe.");
    }
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
      const providers = await getAllProviders();
      const isDuplicateEmail = providers.some(
        (provider: Provider) => provider.mail === data.mail && provider._id !== id
      );
  
      if (isDuplicateEmail) {
        throw new Error('El proveedor con este correo ya existe.');
      }
  
      const updatedData = {
        ProviderName: data.ProviderName,
        mail: data.mail,
        mobileNumber: data.mobileNumber,
        address: data.address,
        website: data.website,
      };
  
      const response = await api.patch(`/products/provider/${id}`, updatedData);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; 
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