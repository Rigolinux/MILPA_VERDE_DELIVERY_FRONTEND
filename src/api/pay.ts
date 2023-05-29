import api from "./axios";
import { Pay, SaleData } from "../interfaces/pay";

// Generando el pago
// export const sendtoBillPaypal = async () => {
export const sendtoBillPaypal = async (amount: number) => {
  console.log("amount que llego: ", amount);
  try {
    const response = await api.post(`/payment/paypal`, {amount});
    console.log("LLegue al final;")
    return response.data.links[1].href;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const captureOrder = async (orderId : string) => {
  console.log("orderID que llego al pay.ts: ", orderId);
  try {
    // const response = await api.post(`/payment/paypal/capture/${orderId}`);
    const response = await api.post(`/payment/paypal/capture/`, {orderId: orderId});
    // console.log("response ", response.data);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createaSale = async (data: SaleData) => {
  try {
    const response = await api.post("/sales/saleCreate", data);
    console.log("Loque se guardo en la db ", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
