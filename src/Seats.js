import React from 'react';

class Seats extends React.Component {
  renderSquare(i) {
    return (
      <button className='seat'>
        {i}
      </button>
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
              this.renderSquare(number+7*index)
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Seats;