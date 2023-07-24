export const getTrainSchedule = async () => {
  try {
    const response = await fetch(`http://localhost:3000/train-schedule`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching train schedule:", error);
    throw error;
  }
};
