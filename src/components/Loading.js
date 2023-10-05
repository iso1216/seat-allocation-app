import { Box } from "@mui/material";

export default function Loading({setValue, seats, setSeats, num}){
  const updateSeats = [...seats];
  const numbersSet = new Set();
  const nulls = updateSeats.filter((value) => value !== 0).length;
  while (numbersSet.size < num-nulls) {
    const randomNum = Math.floor(Math.random() * (num-nulls)) + 1;
    numbersSet.add(randomNum);
  }
  const randomNums = Array.from(numbersSet);
  let i = 0;
  for (let index = 0; index < num; index++) {
    if (updateSeats[index] === 0) updateSeats[index] = randomNums[i++];
  }
  setTimeout(() => {
    setSeats(updateSeats);
    setValue(3);
  }, 2500);

  return(
    <Box>
      <div className="spinner type1">
        <span>Loading...</span>
      </div>
    </Box>
  );
};