// Importaciones
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { SalesGraphics_SalesDetail } from '../../../interfaces/SalesGraphics';

// Registramos los componentes de ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

// Definimos la constante para SalesGraphics de donde tomaremos los datos
// const [salesGraphicsList, setSalesGraphicsList] = React.useState<SalesGraphics_SalesDetail[]>([]);

// Grafico de lineas ejemplo
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const dt = [20, 36, -20, 25, 30, 60];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Ventas por meses',
      data: dt,
      tension: 0.5,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

export function LinesChart() {
  return (
    <Line data={data} options={options}/>
  );
}

// // Grafico de lineas con datos de la base de datos

// // Tomando el valor de ID_recipe de la tabla salesdetails
// const IDReceta = salesGraphicsList.map((salesGraphics) => salesGraphics.ID_recipe);
// const cantidad = salesGraphicsList.map((salesGraphics) => salesGraphics.quantity);

// export const optionsSG = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line ChartSG',
//     },
//   },
// };

// export const dataSG = {
//   IDReceta,
//   datasets: [
//     {
//       fill: true,
//       label: 'IDReceta',
//       data: cantidad,
//       tension: 0.5,
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// }

// export function LinesChartSG() {
//   return (
//     <Line data={dataSG} options={optionsSG}/>
//   );
// }

// // Grafico de lineas basico
// var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
// var meses = [
//   "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//   "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
// ];

// var midata = {
//   labels: meses,
//   datasets: [ // Cada una de las lineas del grafico
//     {
//       labels: "Beneficios",
//       data: beneficios,
//       tension: 0.5,
//       fill: true,
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       pointRadius: 5,
//       pointBorderColor: 'rgba(255, 99, 132)',
//       pointBackgroundColor: 'rgba(255, 99, 132)',
//     }
//   ],
// };

// var mioptions = {
//   scales: {
//     y: {
//       min: 0,
//     },
//     x: {
//       ticks:{
//         color: 'blue'
//       }
//     }
//   }
// };

// export function LinesChart() {
//   return (
//     <Line data={data} options={options}/>
//   );
// }
