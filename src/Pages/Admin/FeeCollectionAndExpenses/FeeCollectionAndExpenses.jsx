import React from 'react';
import "./FeeCollectionAndExpenses";
import "./FeeCollectionAndExpenses.css";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function FeeCollectionAndExpenses() {
    const data = {
        labels: ['Collections', 'Fees', 'Expenses'],
        datasets: [
            {
                label: 'Amount in $',
                data: [10000, 8000, 5000],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 25,
                },
            },
        },
    };

    return (
        <div className="col-lg-8">
                    <div className="card mb-4 shadow-sm">
                        <div className="card-header bg-gradient-primary text-white">
                            Fees Collection & Expenses
                        </div>
                        <div className="card-body">
                            <div style={{ height: '300px' }}>
                                <Bar data={data} options={options} />
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default FeeCollectionAndExpenses;
