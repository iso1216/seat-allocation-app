import React, { useState } from 'react';
import SetSeats from './setSeats';
import ChangeSeats from './changeSeats';
import Result from './result';

const Seats = () => {
  const [seats, setSeats] = useState(Array(56).fill(null));
  const [viewChange, setViewChange] = useState(true);
  const [viewLoading, setViewLoading] = useState(false);

  const handleClick = (i) => {
    const updatedSeats = [...seats];
    if (updatedSeats[i] === 0) {
      updatedSeats[i] = null;
    } else {
      updatedSeats[i] = 0;
    }
    setSeats(updatedSeats);
  };

  const resultSeats = (num) => {
    const updatedSeats = [...seats];
    let indexSeats = 0;
    let indexNum = 0;
    while (indexNum < num.length) {
      if (updatedSeats[indexSeats] !== 0) {
        updatedSeats[indexSeats] = num[indexNum];
        indexNum++;
      }
      indexSeats++;
    }
    setSeats(updatedSeats);
    setViewChange(false);
    setViewLoading(true);
  };

  const renderSeats = (i) => {
    return <SetSeats value={i} onClick={handleClick} />;
  };

  const ViewSeats = (w, h) => {
    return h.map((index) => (
      <div className="board-row" key={index}>
        {w.map((number) => renderSeats(number + 7 * index))}
      </div>
    ));
  };

  const renderResult = (i) => {
    return <Result value={seats[i]} />;
  };

  const ViewResult = (w, h) => {
    return h.map((index) => (
      <div className="board-row" key={index}>
        {w.map((number) => renderResult(number + 7 * index))}
      </div>
    ));
  };

  const ViewLoading = () => {
    setTimeout(() => {
      setViewLoading(false);
    }, 3000);
    return (
      <div className="box">
        <div className="spinner type1">
          <span>Loading...</span>
        </div>
      </div>
    );
  };

  const ViewController = () => {
    if (viewChange) {
      return ViewSeats(widthNumber, height);
    } else {
      if (viewLoading) {
        return ViewLoading();
      } else {
        return ViewResult(widthNumber, height);
      }
    }
  };

  const widthNumber = [0, 1, 2, 3, 4, 5, 6];
  const height = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      {ViewController()}
      {!viewLoading && (
        <div className="viewChange">
          <ChangeSeats seats={seats} onClick={resultSeats} />
          <button
            className="Button"
            onClick={() => {
              setViewChange(true);
              setSeats(Array(56).fill(null));
            }}
          >
            初期化
          </button>
        </div>
      )}
    </div>
  );
};

export default Seats;
