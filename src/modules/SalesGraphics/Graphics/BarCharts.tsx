import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Grafico de barras
var beneficios = [72, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

var mioptions = {
  responsive: true,
  animation: {
    duration: 0,
  },
  plugins: {
    legend: {
      display: false,
    }
  },
  scales: {
    y: {
      min: -25,
      max: 100,
    },
    x: {
      ticks: {color: 'rgba(0, 220, 195)'}
    }
  }
};

var midata = {
  labels: meses,
  datasets: [
    {
      labels: 'Beneficios',
      data: beneficios,
      backgroundColor: 'rgba(0, 220, 195, 0.5)',
    },
    // {
    //   labels: 'Beneficios2',
    //   data: beneficios,
    //   backgroundColor: 'rgba(0, 220, 195, 0.5)',
    // }
  ]
};

export function BarsChart() {
  return (
    <Bar data={midata} options={mioptions}/>
  );
}
