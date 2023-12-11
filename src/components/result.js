import { Box, Button, Typography } from "@mui/material";

export default function Result({setValue, heightNum, widthNum, seats, setHeight, setWidth, setSeats}){
  const heightMap = Array.from({ length: heightNum }, (_, index) => index);
  const widthMap = Array.from({ length: widthNum }, (_, index) => index);

  const handleViewChange = () => {
    setSeats(Array(150).fill(0));
    setHeight(1);
    setWidth(1);
    setValue(0);
  }

  const handleReChange = () => {
    setValue(2);
  }

  return(
    <Box align="center">
      <Typography marginY={2} variant="body1">席替え結果</Typography>
      {heightMap.map((indexH) => {
        return <Box key={indexH}>
          {widthMap.map((indexW) => {
            const num = indexH*widthNum+indexW;
            return <Button variant="contained" sx={{
                                                    backgroundColor: seats[num]===-1 ? "gray":"white",
                                                    color: "black",
                                                    margin: 0.5,
                                                    width: (100-widthNum)/widthNum+"%",
                                                    height: (100-heightNum-22)/heightNum+"vh",
                                                    ":hover" : { background: seats[num]===-1 ? "gray":"white"}
                                                  }} key={indexW}>{seats[num]!==-1 ? seats[num] : ""}</Button>
          })}
        </Box>
      })}
      <Button sx={{color: "black", backgroundColor: "white", marginTop: 2, marginRight: 2}} onClick={handleViewChange} >最初の画面に戻る！</Button>
      <Button sx={{color: "black", backgroundColor: "white", marginTop: 2}} onClick={handleReChange} >再実行！</Button>
    </Box>
  );
};