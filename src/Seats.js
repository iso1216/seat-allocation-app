import React from 'react';
import SetSeats from './setSeats';
import ChangeSeats from './changeSeats';
import Result from './result';

class Seats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seats: Array(56).fill(null),
      viewChange: true,
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

  resultSeats = (num) => {
    const seats = this.state.seats.slice();
    let indexSeats=0;
    let indexNum=0;
    while(indexNum<num.length) {
      if (seats[indexSeats]!==0) {
        seats[indexSeats] = num[indexNum];
        indexNum++;
      }
      indexSeats++;
    }
    this.setState({seats: seats});
    this.setState({viewChange: false});
  }

  renderSeats(i) {
    return (
    <SetSeats
      value={i}
      onClick={this.handleClick}
      />
    );
  }

  ViewSeats(w,h){
    return(h.map((index) => (
      <div className="board-row">
        {w.map((number) => (
          this.renderSeats(number+7*index)
        ))}
      </div>
    )))
  }
  renderResult(i) {
    return (
    <Result
      value={this.state.seats[i]}
      />
    );
  }

  ViewResult(w,h){
    return(h.map((index) => (
      <div className="board-row">
        {w.map((number) => (
          this.renderResult(number+7*index)
        ))}
      </div>
    )))
  }

  ViewController(w,h){
    if(this.state.viewChange)return this.ViewSeats(w,h)
    else return this.ViewResult(w,h)
  }

  render() {
    const widthNumber = [0,1,2,3,4,5,6];
    const heigth = [0,1,2,3,4,5,6,7];
    return (
      <div>
        {this.ViewController(widthNumber,heigth)}
        <ChangeSeats
          seats={this.state.seats}
          onClick={this.resultSeats}
          />
      </div>
    );
  }
}

export default Seats;