
import React from "react";

class ChangeSeats extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value: this.props.seats,
    }
  }

  generateRandomNumber = () => {
    const numbersSet = new Set();
    const nulls = this.props.seats.filter((value) => value !== 0).length;
    while (numbersSet.size < nulls) {
      const randomNum = Math.floor(Math.random() * nulls) + 1;
      numbersSet.add(randomNum);
    }
    const randomNums = Array.from(numbersSet);
    this.setState({
      value: randomNums,
    });
  }

  onChange(num){
    const onClick = this.props.onClick;
    onClick(num);
  };

  render() {
    return (
      <button
        className="Button"
        onClick={() => {
        this.generateRandomNumber();
        setTimeout(()=>{
          this.onChange(this.state.value);
          },500)
      }}>
        席替え
      </button>
    );
  }
}

export default ChangeSeats