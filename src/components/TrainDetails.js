import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./TrainDetails.css";

const TrainDetails = () => {
  const [train, setTrain] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // Fetch the specific train's data from the API based on the id from the URL
    axios.get(`/api/train/${id}`).then((response) => setTrain(response.data));
  }, [id]);

  return (
    <div className="container">
      <h2>Train Information</h2>
      {train.trainName ? (
        <div className="train">
          <h3>{train.trainName}</h3>
          <p>Departure: {train.departureTime}</p>
          <p>Arrival: {train.arrivalTime}</p>
          <p>From: {train.train_from}</p>
          <p>To: {train.train_to}</p>
        </div>
      ) : (
        <p>Train Not Found</p>
      )}
    </div>
  );
};

export default TrainDetails;
