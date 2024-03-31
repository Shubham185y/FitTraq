import React, { useState } from 'react';
import ReactSpeedometer from "react-d3-speedometer/slim";
import './bodymi.css';

function BmiCalculator() {
    const [heightValue, setHeightValue] = useState('');
    const [weightValue, setWeightValue] = useState('');
    const [bmiValue, setBmiValue] = useState(0); // Initialize BMI value in state
    const [bmiMessage, setBmiMessage] = useState('');
    const minBmi = 0;
    const maxBmi = 30;

    const calculateBmi = () => {
        if (heightValue && weightValue) {
            const heightInMeters = heightValue / 100;
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiValue(parseFloat(bmi)); // Update BMI value in state
            let message = '';
            if (bmi < 18.5) {
                message = 'You are Underweight';
            } else if (bmi >= 18.5 && bmi < 25) {
                message = 'You are Normal weight';
            } else if (bmi >= 25 && bmi < 30) {
                message = 'You are Overweight';
            } else {
                message = 'You are Obese';
            }
            setBmiMessage(message);
        } else {
            setBmiValue(0); // Reset BMI value in state
            setBmiMessage('');
        }
    };

    return (
        <div className="containerbox">
            <h1 className='bmih1'>BMI Calculator</h1>
            <div>
			<ReactSpeedometer
                value={bmiValue}
                minValue={minBmi}
                maxValue={maxBmi}
                needleColor="red"
                startColor="blue"
				segmentColors = {['lightblue','orange','lightgreen','violet','red']}
                segments={5}
                endColor="red"
                height={200}
                width={300}
                ringWidth={30}
                textColor="#333"
                needleTransitionDuration={1000}
                currentValueText={`${bmiValue}`}
                needleTransition="easeElastic"
            />
            </div>
            <div className="input-container">
                <label htmlFor="height">Enter Your Height (cm):</label>
                <input
                    type="number"
                    id="height"
                    value={heightValue}
                    onChange={(e) => setHeightValue(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label htmlFor="weight">Enter Your Weight (kg):</label>
                <input
                    type="number"
                    id="weight"
                    value={weightValue}
                    onChange={(e) => setWeightValue(e.target.value)}
                />
            </div>
            <button className="calculate-btn" onClick={calculateBmi}>
                Click to Calculate BMI
            </button>
            {bmiValue && bmiMessage && (
                <div className="result">
                    <p>
                        Your BMI: <span className="bmi-value">{bmiValue}</span>
                    </p>
                    <p>
                        Result: <span className="bmi-message">{bmiMessage}</span>
                    </p>
                </div>
            )}
        </div>
    );
}

export default BmiCalculator;
