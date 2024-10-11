// src/pages/Dashboard.js
import React, { useState } from 'react';
import FinanceChart from '../components/FinanceChart';

const Dashboard = () => {
    const [income] = useState(5000); // Static value for income
    const [expenses] = useState(3000); // Static value for expenses

    return (
        <div className="dashboard">
            <h2>Your Financial Overview</h2>
            <FinanceChart income={income} expenses={expenses} />
            <p>Total Income: ${income}</p>
            <p>Total Expenses: ${expenses}</p>
        </div>
    );
};

export default Dashboard;





