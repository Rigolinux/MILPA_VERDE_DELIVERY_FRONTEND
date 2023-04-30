import { Product } from "../interfaces/product";
import api from "./axios";

// Get all products
export const getAllProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Create a new product
export const createProduct = async (data: Product) => {
  try {
    const response = await api.post("/products/product", data);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Find a product by id
export const getProductById = async (id: string) => {
  try {
    const response = await api.get(`/products/product/${id}`);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Update a product
export const updateProduct = async (id: string, data: Product) => {
  try {
    console.log("ID que llega: ", id);
    console.log("Data que llega: ", data);

    const datos = {
      name: data.name,
      description: data.description,
      price: data.price,
      // stock: data.stock,
      image: data.image,
      category: data.category
    };
    console.log("Datos que se envían: ", datos);
    const response = await api.patch(`/products/product/${id}`, datos);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Delete a one product
export const deleteOneProduct = async (id: string) => {
  try {
    const response = await api.delete(`/products/product/${id}`);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};
