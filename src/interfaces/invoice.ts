import { User } from "./User";
import { Sales, Detail } from './Sales';
import { Recipes } from "./Recipes";

export interface Invoice {
    user: User,
    sale: Sales,
    details: Detail[],
    recipes: Recipes[]
}