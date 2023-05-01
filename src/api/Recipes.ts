import api from "./axios";


export const getRecipes = async () => {
    try {
        const Recipes = await api.get("/inventory/recipes")
        return Recipes.data;

    } catch (error) {
        console.log(error);
        return error;
    }
};