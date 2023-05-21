
enum status {
    InUse = "InUse",
    Inactive = "Inactive",
    use= "En uso",
    inactive= "Inactivo"
}

export interface Recipes {
    _id : string;
    name : string;
    description : string;
    Stock: number;
    status: status;
    cost: number;
    price: number;
    Image: string; 
}

export interface RecipeDetail {
    // _id:            string;
    ID_Product:     string;
    quantity:       number;
    price:          number;
    total:          number;
}
