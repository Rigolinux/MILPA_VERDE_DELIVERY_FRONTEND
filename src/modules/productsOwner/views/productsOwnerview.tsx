import React from 'react';
import { columns } from '../helpers/productoOwnerConfig';
import { Recipes } from '../../../interfaces/Recipes';
import { getAllRecipes } from '../../../api/Recipes';
import { GridColDef, GridActionsCellItem, DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Container } from '@mui/material';

enum status {
  InUse = "InUse",
  Inactive = "Inactive",
  use= "En uso",
  inactive= "Inactivo"
}

const ProductsOwnerview = () => {
    const [recipes, setRecipes] = React.useState<Recipes[]>([]);
  
    React.useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = () => {
        getAllRecipes().then((response:Recipes[]) => {
            response.map((recipe:Recipes) => {
                if(recipe.Image.endsWith("bu_pollo.jpg")){
                    recipe.Image =  'Burrito de pollo'
                }
                if(recipe.Image.endsWith("bu_carne.jpg")){
                    recipe.Image =  'Burrito de carne'
                }
                if(recipe.Image.endsWith("que_pollo.jpg")){
                    recipe.Image =  'Quesadilla de pollo'
                }
                if(recipe.Image.endsWith("que_carne.jpg")){
                    recipe.Image =  'Quesadilla de carne'
                }

                if(recipe.status == 'InUse'){
                    recipe.status = status.use
                }
                else{
                    recipe.status = status.inactive
                }
               
            });
            setRecipes(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    const DeleteRecipe = (params:any) => {};
    const RecipeDetail = (params:any) => {};

    const AddActions = React.useMemo<GridColDef[]>(() => [
        ...columns,
        {
            field: 'actions',
            type: 'actions',
            width: 80,
            getActions: (params: any) => [
              
              <GridActionsCellItem
                icon={<DeleteIcon />}
                label="Eliminar"
                onClick={() => DeleteRecipe(params)}
              />,
      
              <GridActionsCellItem
                icon={<EditIcon />}
                label="Editar"
                onClick={() => RecipeDetail(params)}
              />
      
            ],
          },
        ],[DeleteRecipe, RecipeDetail]);


    return (
    <Container>
        <div >
            <DataGrid
                rows={recipes}
                columns={AddActions}
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 5,
                      },
                    },
                  }}
                  pageSizeOptions={[5]}
                getRowId={(row) => row._id}
                disableRowSelectionOnClick
                />
        </div>
    </Container>
  )
}

export default ProductsOwnerview