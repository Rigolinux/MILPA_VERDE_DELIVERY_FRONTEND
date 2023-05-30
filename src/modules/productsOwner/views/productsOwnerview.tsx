import React from 'react';
import { columns } from '../helpers/productoOwnerConfig';
import { Recipes } from '../../../interfaces/Recipes';
import { DeleteRecipeFromDB, getAllRecipes } from '../../../api/Recipes';
import { GridColDef, GridActionsCellItem, DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
enum status {
  InUse = "InUse",
  Inactive = "Inactive",
  use= "En uso",
  inactive= "Inactivo"
}

const ProductsOwnerview = () => {

  const navigate = useNavigate();
    const [recipes, setRecipes] = React.useState<Recipes[]>([]);
  
    React.useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = () => {
        getAllRecipes().then((response:Recipes[]) => {
          
            setRecipes(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    const DeleteRecipe = async(params:any) => {
  
       console.log(params);
      await  DeleteRecipeFromDB(params)
      getRecipes();
       //alert success
       Swal.fire({
        icon: 'success',
        title: 'Producto eliminado',
        showConfirmButton: false,
        timer: 1500
      });      
    };
    const RecipeDetail = (params:any) => {
      
      navigate(`/managearticles/${params.id}`);
    };

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
                onClick={() => DeleteRecipe(params.id)}
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
        <button type='button' className="btn btn-success mt-2 mb-2"
        onClick={() => {
          navigate('/managearticles/add');
        }}>
          Agregar Producto
      </button>
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