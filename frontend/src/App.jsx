// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogFull from "../src/FullPages/LogFull";
import HomeFull from "./FullPages/HomeFull";
import Dashboard from "./FullPages/Dashboard";
import BmiCalculator from "./components/BmiCalculator"

// const Appstate = createContext();

export default function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  
  return (
    // <Appstate.Provider value={{login, userName, setLogin, setUserName}} >
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
    // </Appstate.Provider>
  );
}
