import React  from 'react';
import {
  SalesGraphics_SalesDetail 
} from "../../../interfaces/SalesGraphics";
import { 
  getAllSalesDetails,
 } from "../../../api/SalesGraphics";
 import { useNavigate } from "react-router-dom";
 // import a bootstrap
 import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.bundle';

  import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
  import { Button, Container } from '@mui/material';

  import DeleteIcon from '@mui/icons-material/Delete';
  import EditIcon from '@mui/icons-material/Edit';
  import { GridColDef } from "@mui/x-data-grid";
  import { columns } from "../helpers/ColumnSalesGraphicsConfig";

  // Importando los componentes necesarrios para usar ChartJS
  import { Line, Bar, Pie } from 'react-chartjs-2';
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  );

  const SalesGraphicsView = () => {

    const navigate = useNavigate();

    const [salesGraphicsList, setSalesGraphicsList] = React.useState<SalesGraphics_SalesDetail[]>([]);
    
    // Cambiar entre cantidad y total 
    const [showQuantity, setShowQuantity] = React.useState(true);

    // Funcion para cambiar entre cantidad y total
    function toggleData() {
      setShowQuantity((prevShowQuantity) => !prevShowQuantity);
    }

    // Tomando el valor de ID_recipe de la tabla salesdetails
    const labelsSGLC_ID_recipe  = salesGraphicsList.map((salesGraphics) => salesGraphics.ID_recipe);
    const dataSGLC_Quantity     = salesGraphicsList.map((salesGraphics) => salesGraphics.quantity);
    const dataSGBC_Total        = salesGraphicsList.map((salesGraphics) => salesGraphics.total);

    // ============================== Grafico de lineas ==============================
    const optionsSGLC = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          // text: 'Ventas por receta',
          // text: showQuantity ? 'Ganancias Obtenidas $' : 'Cantidad Vendida',
          text: showQuantity ? 'Cantidad Vendida' : 'Ganancias Obtenidas $',
        },
      },
    };

    const myDataSGLC = {
      labels: labelsSGLC_ID_recipe,
      datasets: [
        {
          fill: true,
          // label: 'Ventas por receta',
          label: showQuantity ? 'Cantidad Vendida' : 'Ganancias Obtenidas $',
          data: showQuantity ? dataSGLC_Quantity : dataSGBC_Total,
          tension: 0.5,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          pointRadius: 5,
        }
      ],
    };
    
    function LinesChartSGLC() {
      return (
        <Line data={myDataSGLC} options={optionsSGLC}/>
      );
    }

    // ============================== Grafico de barras ==============================
    const optionsSGBC = {
      responsive: true,
      // animation: {
      //   duration: 2000,
      // },
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          // text: 'Ganancias Generadas por Receta',
          text: showQuantity ? 'Ganancias Generadas' : 'Cantidad Vendida',
        },
      },
    };

    const myDataSGBC = {
      labels: labelsSGLC_ID_recipe,
      datasets: [
        {
          label: showQuantity ?  'Ganancia: $' : 'Cantidad Vendida',
          // data: dataSGBC_Total,
          // data: showQuantity ? dataSGLC_Quantity : dataSGBC_Total,
          data: showQuantity ? dataSGBC_Total : dataSGLC_Quantity,
          borderColor: 'rgba(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ]
    };

    function BarsChartSGBC() {
      return (
        <Bar data={myDataSGBC} options={optionsSGBC}/>
      );
    }

    // ============================== Grafico de pastel ==============================
    const optionsSGPC = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          // text: 'Ventas por receta',
          text: showQuantity ? 'Cantidad Vendida' : 'Ganancias Obtenidas $',
        },
      },
    };

    const myDataSGPC = {
      labels: labelsSGLC_ID_recipe,
      datasets: [
        {
          // label: 'Ventas por receta',
          // label: showQuantity ?  'Ventas por receta' : 'Ventas por receta $',
          label: showQuantity ? 'Cantidad Vendida' : 'Ganancias Obtenidas $',
          // data: dataSGLC_Quantity,
          data: showQuantity ? dataSGLC_Quantity : dataSGBC_Total,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 206, 86)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(75, 192, 192)'
          ],
          borderWidth: 1,
        }
      ],
    };

    function PiesChartSGPC() {
      return (
        <Pie data={myDataSGPC} options={optionsSGPC}/>
      );
    }

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
        
        {/* <DataGrid 
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
        /> */}
        </div>
        
        <div className='bg-light mx-auto px-2' style={{width: "80vw", maxWidth: "800px", height: "40vh", maxHeight: "400px"}}>
          {/* Salto de linea */}
          <LinesChartSGLC />
          <br /><br />
          <BarsChartSGBC />
          <br /><br />
          <PiesChartSGPC />

          <Button onClick={toggleData}>
            {/* Texto Inicial */}
            {showQuantity ? 'Cambiar a mostrar cantidad vendida' : 'Cambiar a mostrar ganancia'}
          </Button>

        </div>

      </Container>

    )
  }

  export default SalesGraphicsView;
