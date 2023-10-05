import { Container } from "@mui/material";
import { useState } from "react";
import Seats from "./components/Seats";
import Result from "./components/result";
import SelectValue from "./components/SelectValue";
import Loading from "./components/Loading";

export default function App(){
  const [value, setValue] = useState(0);
  const [heightNum, setHeight] = useState(1);
  const [widthNum, setWidth] = useState(1);
  const [seats,setSeats] = useState(Array(150).fill(0));
  const ViewChange = (value) => {
    switch (value) {
      case 0:
        return <SelectValue setValue={setValue} setHeight={setHeight} setWidth={setWidth} setSeats={setSeats} />;
      case 1:
        return <Seats setValue={setValue} heightNum={heightNum} widthNum={widthNum} seats={seats} setSeats={setSeats} />;
      case 2:
        return <Loading setValue={setValue} seats={seats} setSeats={setSeats} num={widthNum*heightNum} />;
      case 3:
        return <Result setValue={setValue} heightNum={heightNum} widthNum={widthNum} seats={seats} setHeight={setHeight} setWidth={setWidth} setSeats={setSeats} />;
      default:
        break;
    }
  }

  return(
    <Container>
      {ViewChange(value)}
    </Container>
  );
};