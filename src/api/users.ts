import { Users } from "../interfaces/users";
import api from "./axios";

// Get all users
export const getAllUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Create a new user
export const createUser = async (data: Users) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Find a user by id
export const getUserById = async (id: string) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Update a user
export const updateUser = async (id: string, data: Users) => {
  try {
    console.log("ID que llega: ", id);
    console.log("Data que llega: ", data);

    const datos = {
      // role: data?.role,
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      username: data.username
    };
    console.log("Datos que se envían: ", datos);
    const response = await api.patch(`/users/${id}`, datos);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
};

// Delete a one user
export const deleteOneUser = async (id: string) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  }
  catch (error) {
    console.log(error);
    return error;
  }
}
