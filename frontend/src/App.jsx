// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogFull from "../src/FullPages/LogFull";
import HomeFull from "./FullPages/HomeFull";
import Dashboard from "./FullPages/Dashboard";
import BmiCalculator from "./components/BmiCalculator"
export default function App() {
  
  return (
    <>
    <Router>
      <Routes>
         <Route  path="/" element={<HomeFull/>} />
         <Route path="/login" element={<LogFull/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/bmi" element={<BmiCalculator/>}/>

     </Routes>
    </Router>
    </>

  );
}
