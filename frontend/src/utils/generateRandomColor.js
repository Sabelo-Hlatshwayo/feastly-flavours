import generateRandomNumber from "./generateRandomNumber";
import { COLORS } from "./constants";

const generateRandomColor = () => {
  const colorsArray = Object.keys(COLORS);
  const randomIndex = generateRandomNumber(0, colorsArray.length - 1);
  const randomColor = colorsArray[randomIndex];
  return COLORS[randomColor];
};

export default generateRandomColor;
