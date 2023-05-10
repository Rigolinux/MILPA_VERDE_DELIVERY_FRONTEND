import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {
  responsive: true,
  maintainAspectRatio: false,
};

var data = {
  labels: ['Carne', 'Jamon', 'Dulces', 'Turrón', 'Vino'],
  datasets: [
    {
      label: 'Popularidad en Navidad',
      data: [35, 20, 20, 15, 10],
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

export function PiesChart() {
  return (
    <Pie data={data} options={options} />
  );
}
