import Seats from "./Seats";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="seats">
        <div className="seat-box">
          <Seats />
        </div>
      </div>
    );
  }
}

export default App