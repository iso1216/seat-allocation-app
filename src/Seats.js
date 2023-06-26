import React from 'react';
import SetSeats from './setSeats';

class Seats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: Array(56).fill(null),
    };
  }

  handleClick = (i) => {
    const seats = this.state.seats.slice();
    if(seats[i]===0){
      seats[i] = null;
    } else {
      seats[i] = 0;
    }
    this.setState({seats: seats});
  }
  renderSeats(i) {
    return (
    <SetSeats
      value={i}
      onClick={this.handleClick}
      />
    );
  }

  render() {
    const widthNumber = [0,1,2,3,4,5,6];
    const heigth = [0,1,2,3,4,5,6,7]; 
    return (
      <div>
        {heigth.map((index) => (
          <div className="board-row">
            {widthNumber.map((number) => (
              this.renderSeats(number+7*index)
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Seats;