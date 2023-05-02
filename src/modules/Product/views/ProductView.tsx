import React from "react";
import { Product } from "../../../interfaces/product";
import { getAllProducts, deleteOneProduct } from '../../../api/product'
// import ProductCard from "../components/ProductCard";
import { useNavigate, useLinkClickHandler } from "react-router-dom";
// Import a boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Button, Container } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { GridColDef } from "@mui/x-data-grid";
import { columns } from "../helpers/ColumnProductConfig";

const ProductView = () => {

  const navigate = useNavigate();

  const [productList, setProductList] = React.useState<Product[]>([]);

  // creando la funcion para eliminar los productos
  const deleteProduct = (params:any) => {
    deleteOneProduct(params.id).then((response) => {
      console.log(response);
      const newList = productList.filter((product) => product._id !== params.id);
      setProductList(newList);
    }).catch((error) => {
      console.log(error);
    });
  };

  // creando la funcion para obtener los productos por id
  const productDetail = (params:any) => {
    navigate(`/products/${params.id}`);
  };

  // Cerrar sesion
  const logOut = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  React.useEffect(() => {
    getAllProducts().then((response) => {
      setProductList(response);
    });
  }, []);

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
          onClick={() => deleteProduct(params)}
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Editar"
          onClick={() => productDetail(params)}
        />,
      ],
    }
  ], 
  [productDetail, deleteProduct]);

  return (
    <Container>
      
      <div style={{ paddingTop: '20px', }}>

      {/* <button 
      onClick={() => { 
        logOut() 
        }} 
        type="button" className="btn btn-danger">LogOut 
      </button> */}

      <button type='button' className="btn btn-success"
        onClick={() => {
          navigate('/products/add');
        }}>
          Agregar Producto
      </button>

      </div>

      <div style={{ paddingTop: '40px', }}>
        
      <DataGrid 
        rows={productList}
        getRowId={(row) => row._id}
        columns={AddActions}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
      </div>

    </Container>
  )
};

export default ProductView;
