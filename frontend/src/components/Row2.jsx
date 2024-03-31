import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { useUser } from "@clerk/clerk-react";
import ChartJS from "chart.js/auto";
import "../FullPages/styl.css";

const Row2 = ({ shouldUpdate }) => {
  const [caloriesData, setCaloriesData] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    fetchData();
  }, [shouldUpdate]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/meals/last7days",
        {
          params: {
            userId: user.id,
          },
        }
      );
      setCaloriesData(response.data);
      // console.log('Calories data fetched:', response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const today = new Date();
  const last7Days = [];
  const labels = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    last7Days.push(date);
    labels.push(date.toLocaleDateString());
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Calories Intake",
        data: caloriesData.map((entry) => entry.totalCalories || 0), // Use entry.totalCalories instead of entry.calories
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        ticks: {
          stepSize: 1000,
          min: 0,
          max: 5000,
        },
      },
    },
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl mb-8 font-bold text-purple-800">
        Calories Intake for Last 7 Days
      </h2>
      <div className="w-full h-106">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Row2;
