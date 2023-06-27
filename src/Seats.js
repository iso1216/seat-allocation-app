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
    if (seats[i] === 0) {
      seats[i] = null;
    } else {
      seats[i] = 0;
    }
    this.setState({ seats: seats });
  };

  resultSeats = (num) => {
    const seats = this.state.seats.slice();
    let indexSeats = 0;
    let indexNum = 0;
    while (indexNum < num.length) {
      if (seats[indexSeats] !== 0) {
        seats[indexSeats] = num[indexNum];
        indexNum++;
      }
      indexSeats++;
    }
    this.setState({ seats: seats, viewChange: false });
  };

  renderSeats(i) {
    return <SetSeats value={i} onClick={this.handleClick} />;
  }

  ViewSeats(w, h) {
    return h.map((index) => (
      <div className="board-row" key={index}>
        {w.map((number) => this.renderSeats(number + 7 * index))}
      </div>
    ));
  }

  renderResult(i) {
    return <Result value={this.state.seats[i]} />;
  }

  ViewResult(w, h) {
    return h.map((index) => (
      <div className="board-row" key={index}>
        {w.map((number) => this.renderResult(number + 7 * index))}
      </div>
    ));
  }

  render() {
    const widthNumber = [0, 1, 2, 3, 4, 5, 6];
    const height = [0, 1, 2, 3, 4, 5, 6, 7];
    return (
      <div>
        {this.state.viewChange ? (
          this.ViewSeats(widthNumber, height)
        ) : (
          this.ViewResult(widthNumber, height)
        )}
        <div className="viewChange">
          <ChangeSeats seats={this.state.seats} onClick={this.resultSeats} />
          <button
            className="Button"
            onClick={() => {
              this.setState({ viewChange: true, seats: Array(56).fill(null) });
            }}
          >
            再抽選
          </button>
        </div>
      </div>
    );
  }
}

export default Seats;
