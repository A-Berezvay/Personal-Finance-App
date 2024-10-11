// src/components/FinanceChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FinanceChart = ({ income, expenses }) => {
    const data = {
        labels: ['Income', 'Expenses'],
        datasets: [
            {
                label: 'Financial Overview',
                data: [income, expenses],
                backgroundColor: ['#4caf50', '#f44336'],
            },
        ],
    };

    return <Bar data={data} />;
};

export default FinanceChart;

