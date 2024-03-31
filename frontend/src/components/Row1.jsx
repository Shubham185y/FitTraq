import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from 'react-chartjs-2';
import "./styles.css";
import "../FullPages/styl.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const Row1 = ({ meals, foodData }) => {
  // Function to calculate total calories
  const calculateTotalCalories = () => {
    let totalCalories = 0;
    meals.forEach((item) => {
      const food = foodData.find(
        (foodItem) => foodItem.Description === item.foodItem
      );
      if (food) {
        totalCalories += food.Data.Kilocalories;
      }
    });
    return totalCalories;
  };

  // Function to calculate total nutrients and percentages
  const calculateTotalNutrients = () => {
    let totalProteins = 0;
    let totalMinerals = {
      Iron: 0,
      Potassium: 0,
      Sodium: 0,
      Zinc: 0,
    };
    let totalCarbohydrates = 0;

    meals.forEach((item) => {
      const food = foodData.find(
        (foodItem) => foodItem.Description === item.foodItem
      );
      if (food) {
        totalProteins += food.Data.Protein || 0;
        totalMinerals.Iron += food.Data["Major Minerals"].Iron || 0;
        totalMinerals.Potassium += food.Data["Major Minerals"].Potassium || 0;
        totalMinerals.Sodium += food.Data["Major Minerals"].Sodium || 0;
        totalMinerals.Zinc += food.Data["Major Minerals"].Zinc || 0;
        totalCarbohydrates += food.Data.Carbohydrate || 0;
      }
    });

    const totalMineralsSum = Object.values(totalMinerals).reduce(
      (acc, curr) => acc + curr,
      0
    );

    // Calculate percentages
    const totalSum = totalProteins + totalMineralsSum + totalCarbohydrates;
    const proteinPercentage = (totalProteins / totalSum) * 100;
    const mineralPercentage = (totalMineralsSum / totalSum) * 100;
    const carbohydratePercentage = (totalCarbohydrates / totalSum) * 100;

    return {
      totalProteins,
      totalMinerals: totalMineralsSum,
      totalCarbohydrates,
      proteinPercentage,
      mineralPercentage,
      carbohydratePercentage,
    };
  };

  // Data for doughnut chart
  const data = {
    labels: ["Minerals", "Carbohydrates", "Proteins"],
    datasets: [
      {
        data: [
          calculateTotalNutrients().totalMinerals,
          calculateTotalNutrients().totalCarbohydrates,
          calculateTotalNutrients().totalProteins,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.6)", // Blue with transparency
          "rgba(255, 205, 86, 0.6)", // Yellow with transparency
          "rgba(255, 99, 132, 0.6)", // Red with transparency
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)", // Blue
          "rgba(255, 205, 86, 1)", // Yellow
          "rgba(255, 99, 132, 1)", // Red
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for doughnut chart
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="parent flex justify-between px-4 py-16">
      <div className="left mr-8">
        <h6 className="mb-4 text-4xl font-semibold text-purple-800">
          Total Calories: {calculateTotalCalories()}
        </h6>

        <h6 className="mb-4">
          Total Proteins: {calculateTotalNutrients().totalProteins}g (
          {calculateTotalNutrients().proteinPercentage.toFixed(2)}%)
        </h6>
        <h6 className="mb-4">
          Total Minerals: {calculateTotalNutrients().totalMinerals}g (
          {calculateTotalNutrients().mineralPercentage.toFixed(2)}%)
        </h6>
        <h6 className="mb-4">
          Total Carbohydrates: {calculateTotalNutrients().totalCarbohydrates}g (
          {calculateTotalNutrients().carbohydratePercentage.toFixed(2)}%)
        </h6>
      </div>
      <div
        className="right flex flex-col items-center justify-center"
        style={{ width: "200px", height: "200px" }}
      >
        <br />
        <Doughnut data={data} options={options} />
        <div className="w-full text-center">
          <span
            className="legend-item"
            style={{ color: "rgba(54, 162, 235, 1)" }}
          >
            Minerals <br />
          </span>
          <span
            className="legend-item"
            style={{ color: "rgba(255, 205, 86, 1)" }}
          >
            Carbohydrates
          </span>
          <br />
          <span
            className="legend-item"
            style={{ color: "rgba(255, 99, 132, 1)" }}
          >
            Proteins
          </span>
        </div>
      </div>
    </div>
  );
};

export default Row1;
