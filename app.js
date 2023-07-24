const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Sample train schedule data
const generateTrainScheduleData = () => {
  const trains = [
    {
      trainName: "Express 1",
      departureTime: "06:00 AM",
      arrivalTime: "06:10 AM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Express 2",
      departureTime: "6:30 AM",
      arrivalTime: "6:40 PM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Express 3",
      departureTime: "07:00 AM",
      arrivalTime: "7:10 AM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Express 4",
      departureTime: "07:30 AM",
      arrivalTime: "07:40 PM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Express 5",
      departureTime: "08:00 AM",
      arrivalTime: "8:10 AM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Express 6",
      departureTime: "8:30 AM",
      arrivalTime: "08:40 AM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Express 7",
      departureTime: "09:00 AM",
      arrivalTime: "09:10 AM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Express 8",
      departureTime: "09:30 AM",
      arrivalTime: "09:40 AM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Local 1",
      departureTime: "10:00 AM",
      arrivalTime: "10:10 AM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Local 2",
      departureTime: "10:30 AM",
      arrivalTime: "10:40 PM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Local 3",
      departureTime: "11:00 AM",
      arrivalTime: "11:10 AM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Local 4",
      departureTime: "11:30 AM",
      arrivalTime: "11:40 PM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Local 5",
      departureTime: "12:00 PM",
      arrivalTime: "12:10 PM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Local 6",
      departureTime: "12:30 PM",
      arrivalTime: "12:40 PM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Local 7",
      departureTime: "01:00 PM",
      arrivalTime: "01:10 PM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
    {
      trainName: "Local 8",
      departureTime: "01:30 AM",
      arrivalTime: "01:40 PM",
      train_from: "ABCD",
      train_to: "EFGH",
    },
  ];

  return trains;
};

// API endpoint to get the list of trains
app.get("/api/train", (req, res) => {
  const trainScheduleData = generateTrainScheduleData();
  res.json(trainScheduleData);
});

// API endpoint to get a single train's details
app.get("/api/train/:id", (req, res) => {
  const { id } = req.params;
  const trainScheduleData = generateTrainScheduleData();
  const selectedTrain = trainScheduleData[id];

  if (selectedTrain) {
    res.json(selectedTrain);
  } else {
    res.status(404).json({ message: "Train not found" });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
