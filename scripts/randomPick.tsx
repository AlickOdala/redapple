import react from "react";

const RandomPick = (array, count) => {
  if (!array || array.length === 0) return [];
  const result = [];
  const copy = [...array];
  const pickCount = Math.min(count, copy.length);

  for (let i = 0; i < pickCount && copy.length > 0; i++) {
    const randomindex = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(randomindex, 1)[0]);
  }
  return result;
};

export default RandomPick;

export const RandomNumber = (min, max) => {
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};
