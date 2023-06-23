import React from "react";

class SetSeats extends React.Component {
  constructor(props){
    super(props);
    this.state={
      number: null,
      disable: "seat",
    };
  }

  checkDisable = (dis) => {
    if(dis==="seat"){
      this.setState({
        disable: "noneseat",
      });
      //numberOfSeatを何とかする
      this.props.numberOfSeats--;
    } else {
      this.setState({
        disable: "seat",
      });
      this.props.numberOfSeats++;
    }
  };
  
  render() {
    return (
      <button className={this.state.disable} onClick={() => {
        this.checkDisable(this.state.disable);
      }}>
        {this.state.number}
      </button>
    );
  }
}

export default SetSeats