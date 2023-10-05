import { Box, Button, Slider, Stack, Typography } from "@mui/material";

export default function SelectValue({setValue, setHeight, setWidth}){
  const handleOnClick = () => {
    setValue(1);
  }
  const handleHeightSlider = (event, value) => {
    setHeight(value);
  }
  const handleWidthSlider = (event, value) => {
    setWidth(value);
  }
  return(
    <Box align="center" marginTop={10}>
      <Typography variant="h1">席替え</Typography>
      <Typography variant="body1">最大15×10のマスで作成ができます。</Typography>
      <Box maxWidth={"300px"}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Typography>縦：</Typography>
          <Slider defaultValue={1} valueLabelDisplay="auto" min={1} max={15} onChange={handleHeightSlider} />
        </Stack>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Typography>横：</Typography>
          <Slider defaultValue={1} valueLabelDisplay="auto" min={1} max={10} onChange={handleWidthSlider}/>
        </Stack>
      </Box>
      <Button onClick={handleOnClick} sx={{color: "black", backgroundColor: "whitesmoke"}}>テンプレートの作成</Button>
    </Box>
  );
};