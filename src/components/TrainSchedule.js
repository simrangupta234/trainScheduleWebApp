import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./TrainSchedule.css";

const TrainSchedule = () => {
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    // Fetch train schedule data from the API
    axios.get("/api/train").then((response) => setScheduleData(response.data));
  }, []);

  return (
    <div className="container">
      <h2 >List of Trains</h2>
      {scheduleData.map((train, index) => (
        <div className="trains" key={index}>
          <Link to={`/train/${index}`}>
            <li>{train.trainName}</li>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TrainSchedule;
