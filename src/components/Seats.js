import { Box, Button, Typography } from "@mui/material";

export default function Seats({setValue, heightNum, widthNum, seats, setSeats}) {
  const heightMap = Array.from({ length: heightNum }, (_, index) => index);
  const widthMap = Array.from({ length: widthNum }, (_, index) => index);
  const handleOnClick = (i) => {
    const updateSeats = [...seats];
    if (seats[i] === 0) updateSeats[i] = -1;
    if (seats[i] === -1) updateSeats[i] = 0;
    setSeats(updateSeats);
  };

  const handleViewChange = () => {
    setValue(2);
  }

  return(
    <Box align="center">
      <Typography marginY={2} variant="body1">仕様座席指定</Typography>
      {heightMap.map((indexH) => {
        return <Box key={indexH}>
          {widthMap.map((indexW) => {
            return <Button variant="contained" sx={{
                                                    backgroundColor: seats[indexH*widthNum+indexW]===0 ? "white":"gray",
                                                    margin: 0.5,
                                                    width: (100-widthNum)/widthNum+"%",
                                                    height: (100-heightNum-22)/heightNum+"vh",
                                                    ":hover" : { background: seats[indexH*widthNum+indexW]===0 ? "white":"gray"}
                                                  }} onClick={() => handleOnClick(indexH*widthNum+indexW)} key={indexW}></Button>
          })}
        </Box>
      })}
      <Button sx={{color: "black", backgroundColor: "white", marginTop: 2}} onClick={handleViewChange} >席替え実行！</Button>
    </Box>
  );
};