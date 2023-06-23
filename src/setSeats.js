import React from "react";

class SetSeats extends React.Component {
  constructor(props){
    super(props);
    this.state={
      number: props.value,
      disable: "seat",
    };
  }

  checkDisable = (dis) => {
    if(dis==="seat"){
      this.setState({
        disable: "noneSeat",
      });
    } else {
      this.setState({
        disable: "seat",
      });
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