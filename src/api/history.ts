import api from "./axios";
import { History } from "../interfaces/history";

export const getSaleHistory = async (id: string) => {
  console.log("id que llego al history.ts: ", id);
  try {
    const response = await api.get(`/sales/salesHeaders/history/${id}`);
    console.log("response ", response.data);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// getsSaleHistoryAdm para admins
export const getSaleHistoryAdm = async () => {
  try {
    const response = await api.get(`/sales/salesHeaders`);
    console.log("response ", response.data);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};


export const deleteSaleHistoryBy_id = async (id: string) => {
  console.log("id que llego al history delete: ", id);
  try {
    const response = await api.delete(`/sales/salesHeaders/history/del/${id}`);
    console.log("response ", response.data);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};
