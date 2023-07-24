import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainSchedule from "./components/TrainSchedule";
import TrainDetails from "./components/TrainDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" >
        <div className="App-title" id="grad" >Train Schedule App</div>
        <Routes>
          <Route exact path="/" element={<TrainSchedule />} />
          <Route path="/train/:id" element={<TrainDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
