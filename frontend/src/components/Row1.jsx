import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './styles.css'
ChartJS.register(ArcElement, Tooltip, Legend);


const Row1 = ({ meals, foodData }) => {
  // Function to calculate total calories
  const calculateTotalCalories = () => {
    let totalCalories = 0;
    meals.forEach(item => {
      const food = foodData.find(foodItem => foodItem.Description === item.foodItem);
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
      Zinc: 0
    };
    let totalCarbohydrates = 0;

    meals.forEach(item => {
      const food = foodData.find(foodItem => foodItem.Description === item.foodItem);
      if (food) {
        totalProteins += food.Data.Protein || 0;
        totalMinerals.Iron += food.Data['Major Minerals'].Iron || 0;
        totalMinerals.Potassium += food.Data['Major Minerals'].Potassium || 0;
        totalMinerals.Sodium += food.Data['Major Minerals'].Sodium || 0;
        totalMinerals.Zinc += food.Data['Major Minerals'].Zinc || 0;
        totalCarbohydrates += food.Data.Carbohydrate || 0;
      }
    });

    const totalMineralsSum = Object.values(totalMinerals).reduce((acc, curr) => acc + curr, 0);

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
      carbohydratePercentage
    };
  };
  const data = {
    labels: [
      'Minerals',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  return (
    <div className="parent">
    <div className="left">
      <h6>Total Calories: {calculateTotalCalories()}</h6>
      <h6>Total Proteins: {calculateTotalNutrients().totalProteins}g ({calculateTotalNutrients().proteinPercentage.toFixed(2)}%)</h6>
      <h6>Total Minerals: {calculateTotalNutrients().totalMinerals}g ({calculateTotalNutrients().mineralPercentage.toFixed(2)}%)</h6>
      <h6>Total Carbohydrates: {calculateTotalNutrients().totalCarbohydrates}g ({calculateTotalNutrients().carbohydratePercentage.toFixed(2)}%)</h6>
    </div>
    <div className="right" style={{width: '100px'}}>
      <Doughnut data={data}  options={ {
    maintainAspectRatio: false,
    aspectRatio: 1
    }} />
    </div>
    </div>
  );
};

export default Row1;
