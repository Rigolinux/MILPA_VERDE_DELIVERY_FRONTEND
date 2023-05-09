import { SalesGraphics_Sales } from '../interfaces/SalesGraphics';
import api from './axios';

// Create a new sale
export const createSale = async (data: SalesGraphics_Sales) => {
  try {
    const response = await api.post("/sales/saleCreate", data);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Get all salesHeaders
export const getAllSalesHeaders = async () => {
  try {
    const response = await api.get("/sales/salesHeaders");
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Get all salesDetails
export const getAllSalesDetails = async () => {
  try {
    const response = await api.get("/sales/salesDetails");
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Get all salesHeaders by ID
export const getSalesHeaderById = async (id: string) => {
  try {
    const response = await api.get(`/sales/findSalesHeaders/${id}`);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Get all salesDetails by ID
export const getSalesDetailById = async (id: string) => {
  try {
    const response = await api.get(`/sales/findSalesDetails/${id}`);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Get all salesHeaders by ID_Sales
export const getSalesHeaderByIdSales = async (id: string) => {
  try {
    const response = await api.get(`/sales/salesDetails/searchbyIDSale/${id}`);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Get all salesHeaders by ID_User
export const getSalesHeaderByIdUser = async (id: string) => {
  try {
    const response = await api.get(`/sales/salesHeaders/searchbyIDUser/${id}`);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};
