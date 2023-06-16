// This function generates a random integer between lowerBound (inclusive) and upperBound (inclusive)
const generateRandomNumber = (lowerBound, upperBound) => {
  return Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound);
};

export default generateRandomNumber;
