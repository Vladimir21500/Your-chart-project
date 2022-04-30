import React from 'react';
import PropTypes from 'prop-types';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const CustomChart = ({ labels, values, typeChart }) => {
  const data = {
    labels: labels.split(','),
    datasets: [
      {
        label: 'Your chart',
        data: values.split(','),
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',

          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',

          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  switch (typeChart) {
    case 'bar':
      return <Bar className='chart' data={data} options={options} />;
    case 'line':
      return <Line className='chart' data={data} options={options} />;
    case 'pie':
      return <Pie className='chart' data={data} options={options} />;
    case 'radar':
      return <Radar className='chart' data={data} options={options} />;
    default:
      return null;
  }
};

CustomChart.propTypes = {
  labels: PropTypes.string.isRequired,
  values: PropTypes.string.isRequired,
  typeChart: PropTypes.string.isRequired,
};

export default CustomChart;
