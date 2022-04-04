import React from "react";
import "./DashBoardPage.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line,
} from "recharts";
import chartData from "../../utilities/chartData.json";

const DashBoardPage = () => {
    return (
        <section className="dashboard-wrapper">
            <div className="bar-data">
                <BarChart width={1200} height={250} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#82ca9d" />
                    <Bar dataKey="revenue" fill="#1a90bf" />
                </BarChart>
            </div>
            <div className="area-chart">
                <LineChart
                    width={1200}
                    height={250}
                    data={chartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="investment"
                        stroke="#8884d8"
                    />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="revenue" stroke="#1a90bf" />
                </LineChart>
            </div>
        </section>
    );
};

export default DashBoardPage;
