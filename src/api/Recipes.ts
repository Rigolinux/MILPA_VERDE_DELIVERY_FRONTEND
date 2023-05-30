import api from "./axios";
import { RecipeDetail } from "../interfaces/Recipes";
import { data } from '../modules/SalesGraphics/Graphics/LinesCharts';

export const getAllRecipes = async () => {
    try {
        const Recipes = await api.get("/inventory/recipes")
        return Recipes.data;

    } catch (error) {
        console.log(error);
        return error;
    }
};

export const CreateRecipe = async (data:any) => {
    try {
        const Recipes = await api.post("/inventory/recipes", data)
        return Recipes.data;

    } catch (error) {
        console.log(error);
        return error;
    }
};

export const getRecipeById = async (id: string) => {
    try {
        const response = await api.get(`/inventory/recipesh/${id}`);
        return response.data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
};

export const createRecipeDetail2 = async (id: string) => {
    try {
        const response = await api.post(`/inventory/recipes/buy/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const createRecipeDetail = async (id: string, recipeDetail: RecipeDetail) => {
    try {
      const response = await api.post(`/inventory/recipes/buy/${id}`, recipeDetail);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  
