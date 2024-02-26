import React from "react";
import "./styles.css";
import MealTracker from "./MealTracker";
import foodData from "../components/foodData";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";

function lay() {
  const percentage = 66;
  return (
    <div className="container">
      <div className="col" style={{ flex: "0 0 20%", backgroundColor: "red" }}>
        Column 1
      </div>
      <div className="col" style={{ flex: "0 0 60%", backgroundColor: "blue" }}>
        <div className="row" style={{ height: "50%", backgroundColor: "green" }}>          
              <div style={{ width: 200, height: 200 }}>
                  <CircularProgressbar  text={`${percentage}%`} />
              </div>
        </div>
        <div className="row" style={{ height: "50%", backgroundColor: "yellow" }}>
          Row 2
        </div>
      </div>
      <div className="col" style={{ flex: "0 0 20%", backgroundColor: "orange" }}>
        
        <MealTracker foodData={foodData}/>
      </div>
    </div>
  );
}

export default lay;
