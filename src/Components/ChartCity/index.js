import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function ChartCity(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start'
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const colors = ['rgba(255, 99, 132, 0.5)','rgba(53, 162, 235, 0.5)','rgba(53, 235, 159, 0.5)','rgba(235, 235, 53, 0.5)']
  const colorsBorder = ['rgb(255, 99, 132)','rgb(53, 162, 235)','rgb(53, 235, 159)','rgb(235, 235, 53)']

  const labels = ['Total'];
  const datasets = props.DSVACINAmn?.map((item, index) => {
    return {
      label: item.name,
      data: [item.qt],
      backgroundColor: colors[index],
      borderColor: colorsBorder[index],
      borderWidth: 1
    }
  })
  
  const data = {
  labels,
  datasets
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default ChartCity;