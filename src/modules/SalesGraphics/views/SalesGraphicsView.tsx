import React  from 'react';
import { 
  // SalesGraphics_Sales, 
  // SalesGraphics_SalesHeader, 
  SalesGraphics_SalesDetail 
} from "../../../interfaces/SalesGraphics";
import { 
  // createSale,
  // getAllSalesHeaders,
  getAllSalesDetails,
  // getSalesHeaderById,
  // getSalesDetailById,
  // getSalesHeaderByIdSales,
  // getSalesHeaderByIdUser,
 } from "../../../api/SalesGraphics";
 import { useNavigate } from "react-router-dom";
 // import a bootstrap
 import 'bootstrap/dist/css/bootstrap.min.css';
  import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
  import { Button, Container } from '@mui/material';

  import DeleteIcon from '@mui/icons-material/Delete';
  import EditIcon from '@mui/icons-material/Edit';
  import { GridColDef } from "@mui/x-data-grid";
  import { columns } from "../helpers/ColumnSalesGraphicsConfig";

  const SalesGraphicsView = () => {

    const navigate = useNavigate();

    const [salesGraphicsList, setSalesGraphicsList] = React.useState<SalesGraphics_SalesDetail[]>([]);

    // creando la funcion para eliminar los salesdetails
    // {
    //   ...
    // }

    // creando la funcion para obtener los salesdetails por id
    const salesGraphicsDetail = (params:any) => {
      navigate(`/salesgraphics/${params.id}`);
    };

    // Cerrar sesion
    const logOut = () => {
      localStorage.removeItem('user');
      navigate('/login');
    };

    React.useEffect(() => {
      getAllSalesDetails().then((response) => {
        setSalesGraphicsList(response);
      });
    }, []);

    const AddActions = React.useMemo<any[]>(() => [
      ...columns,
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params: any) => [
          // <GridActionsCellItem
          //   icon={<DeleteIcon />}
          //   label="Eliminar"
          //   onClick={() => deleteProduct(params)}
          // />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Editar"
            onClick={() => salesGraphicsDetail(params)}
          />,
        ],
      }
    ],
    [salesGraphicsDetail]);

    // console.log(salesGraphicsList);

    return (
      // <>
      //   Hola
      // </>

      <Container>
        <div style={{ paddingTop: '40px', }}>
        
        <DataGrid 
          rows={salesGraphicsList}
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
  }

  export default SalesGraphicsView;
