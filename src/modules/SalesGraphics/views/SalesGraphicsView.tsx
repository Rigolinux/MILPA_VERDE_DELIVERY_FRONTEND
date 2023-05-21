import React, { useEffect, useState } from "react";
import { SalesGraphics_SalesDetail } from "../../../interfaces/SalesGraphics";
import { getAllSalesDetails } from "../../../api/SalesGraphics";
import { useNavigate } from "react-router-dom";
import { columns } from "../helpers/ColumnSalesGraphicsConfig";

// import a bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// Imports de mui
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Button, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// Imports necesarios para usar los componentes de fecha
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// Importando css
import "../SalesGraphicsView.css";

// Importando los componentes necesarrios para usar ChartJS
import { Line, Bar, Pie } from "react-chartjs-2";
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
} from "chart.js";

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
  Filler
);

const SalesGraphicsView = () => {
  const navigate = useNavigate();

  const [salesGraphicsList, setSalesGraphicsList] = React.useState<
    SalesGraphics_SalesDetail[]
  >([]);
  const [salesGraphicsList2, setSalesGraphicsList2] = React.useState<
    SalesGraphics_SalesDetail[]
  >([]);

  // Cambiar entre cantidad y total
  const [showQuantity, setShowQuantity] = React.useState(true);

  // Funcion para cambiar entre cantidad y total
  function toggleData() {
    setShowQuantity((prevShowQuantity) => !prevShowQuantity);
  }

  // Tomando el valor de ID_recipe de la tabla salesdetails
  const [labelsSGLC_ID_recipe, setlabelsSGLC_ID_recipe] = React.useState();
  const [dataSGLC_Quantity, setdataSGLC_Quantity] = React.useState();
  const [dataSGBC_Total, setdataSGBC_Total] = React.useState();

  // ============================== Grafico de lineas ==============================
  const optionsSGLC = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        // text: 'Ventas por receta',
        // text: showQuantity ? 'Ganancias Obtenidas $' : 'Cantidad Vendida',
        text: showQuantity ? "Cantidad Vendida" : "Ganancias Obtenidas $",
      },
    },
  };

  const myDataSGLC = {
    labels: labelsSGLC_ID_recipe,
    datasets: [
      {
        fill: true,
        // label: 'Ventas por receta',
        label: showQuantity ? "Cantidad Vendida" : "Ganancias Obtenidas $",
        data: showQuantity ? dataSGLC_Quantity : dataSGBC_Total,
        tension: 0.5,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
      },
    ],
  };

  function LinesChartSGLC() {
    return <Line data={myDataSGLC} options={optionsSGLC} />;
  }

  // ============================== Grafico de barras ==============================
  const optionsSGBC = {
    responsive: true,
    // animation: {
    //   duration: 2000,
    // },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        // text: 'Ganancias Generadas por Receta',
        text: showQuantity ? "Ganancias Generadas" : "Cantidad Vendida",
      },
    },
  };

  const myDataSGBC = {
    labels: labelsSGLC_ID_recipe,
    datasets: [
      {
        label: showQuantity ? "Ganancia: $" : "Cantidad Vendida",
        // data: dataSGBC_Total,
        // data: showQuantity ? dataSGLC_Quantity : dataSGBC_Total,
        data: showQuantity ? dataSGBC_Total : dataSGLC_Quantity,
        borderColor: "rgba(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  function BarsChartSGBC() {
    return <Bar data={myDataSGBC} options={optionsSGBC} />;
  }

  // ============================== Grafico de pastel ==============================
  const optionsSGPC = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        // text: 'Ventas por receta',
        text: showQuantity ? "Cantidad Vendida" : "Ganancias Obtenidas $",
      },
    },
  };

  const myDataSGPC = {
    labels: labelsSGLC_ID_recipe,
    datasets: [
      {
        // label: 'Ventas por receta',
        // label: showQuantity ?  'Ventas por receta' : 'Ventas por receta $',
        label: showQuantity ? "Cantidad Vendida" : "Ganancias Obtenidas $",
        // data: dataSGLC_Quantity,
        data: showQuantity ? dataSGLC_Quantity : dataSGBC_Total,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 206, 86)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
      },
    ],
  };

  function PiesChartSGPC() {
    return <Pie data={myDataSGPC} options={optionsSGPC} />;
  }

  // creando la funcion para obtener los salesdetails por id
  const salesGraphicsDetail = (params: any) => {
    navigate(`/salesgraphics/${params.id}`);
  };

  // Cerrar sesion
  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  React.useEffect(() => {
    getAllSalesDetails().then((response) => {
      setSalesGraphicsList(response);
      setlabelsSGLC_ID_recipe(
        response.map((salesGraphics: any) => salesGraphics.ID_recipe)
      );
      setdataSGLC_Quantity(
        response.map((salesGraphics: any) => salesGraphics.quantity)
      );
      setdataSGBC_Total(
        response.map((salesGraphics: any) => salesGraphics.total)
      );
      setSalesGraphicsList2(response);
    });
  }, []);

  const AddActions = React.useMemo<any[]>(
    () => [
      ...columns,
      {
        field: "actions",
        type: "actions",
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
      },
    ],
    [salesGraphicsDetail]
  );

  // console.log(salesGraphicsList);

  const funcionPrueba = () => {
    // console.log(salesGraphicsList, "Before");
    setSalesGraphicsList(salesGraphicsList2);
    let x: SalesGraphics_SalesDetail[] = [];
    // console.log(salesGraphicsList2, "After");
    console.log(x, "x");

    salesGraphicsList2.forEach((salesGraphics: SalesGraphics_SalesDetail) => {
      if (salesGraphics.dateOfbuy.endsWith("04-2023")) {
        x.push(salesGraphics);
      }
    });

    setSalesGraphicsList(x);
    setlabelsSGLC_ID_recipe(x.map((salesGraphics: SalesGraphics_SalesDetail) => salesGraphics.ID_recipe));
    setdataSGLC_Quantity(x.map((salesGraphics: any) => salesGraphics.quantity));
    setdataSGBC_Total(x.map((salesGraphics: any) => salesGraphics.total));
  };

  // Declarando una variable para almacenar la fecha seleccionada
  const [selectedDate, setSelectedDate] = React.useState(null);

  const funcionListPrueba = (date: any) => {
    setSelectedDate(date);
    // Guardando los datos de mes y año en variables
    let month = date.format("MM");
    let year = date.format("YYYY");
    // Concatenandolos en una sola variable
    let dateSelected = month + "-" + year;
    console.log(dateSelected, "Date Selectedasdasdasdasdasdasd");

    console.log(salesGraphicsList, "Before List");
    setSalesGraphicsList(salesGraphicsList2);
    let x: SalesGraphics_SalesDetail[] = [];
    console.log(salesGraphicsList2, "After List");
    console.log(selectedDate, "Date Selected");
    // console.log(x, 'x')
    salesGraphicsList2.forEach((salesGraphics: SalesGraphics_SalesDetail) => {
      if (salesGraphics.dateOfbuy.endsWith(dateSelected)) {
        x.push(salesGraphics);
      }
    });
    setSalesGraphicsList(x);
    // seteando los datos de la grafica que se mostrara en base a la fecha seleccionada
    setlabelsSGLC_ID_recipe(x.map((salesGraphics: SalesGraphics_SalesDetail) => salesGraphics.ID_recipe));
    setdataSGLC_Quantity(x.map((salesGraphics: any) => salesGraphics.quantity));
    setdataSGBC_Total(x.map((salesGraphics: any) => salesGraphics.total));
  };

  // Botones mostrar graficos
  const [activeDiv, setActiveDiv] = useState('left');
  const showDiv = (divId : any) => {
    setActiveDiv(divId);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Graficos de Ventas</h1>
        <div>
          <button className="btn" onClick={() => showDiv('left')}>
            Mostrar Grafico Lineal
          </button>
          <button className="btn" onClick={() => showDiv('middle')}>
            Mostrar Grafico de Barras
          </button>
          <button className="btn" onClick={() => showDiv('right')}>
            Mostrar Grafico de Pastel
          </button>
        </div>
      </div>

      <div className="header2">
        Filtro:
        <div className="filtro">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label={'"Mes"'} views={["month"]} value={selectedDate} onChange={funcionListPrueba}/>
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </div>

      {/* <div className={`col side1 ${activeDiv === 'left' ? 'active' : 'inactive'}`} id="left"> */}
      <div className={`col side1 ${activeDiv === 'left' ? 'active' : 'inactive'}`} id="left" 
        style={{ width: '69vw', height: '30vw', padding: '0 10px', alignItems: 'center' }}>
        <LinesChartSGLC />
      </div>
      {/* <div className={`col middle ${activeDiv === 'middle' ? 'active' : 'inactive'}`} id="middle"> */}
      <div className={`col middle ${activeDiv === 'middle' ? 'active' : 'inactive'}`} id="middle" 
        style={{ width: '69vw', height: '30vw', padding: '0 10px', alignItems: 'center' }}>
        <BarsChartSGBC />
      </div>
      <div className={`col side2 ${activeDiv === 'right' ? 'active' : 'inactive'}`} id="right" 
        style={{ width: '69vw', height: '30vw', padding: '0 10px', alignItems: 'center' }}>
        <PiesChartSGPC />
      </div>
    </div>
  );
};

export default SalesGraphicsView;
