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
    this.onChange();
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

  onChange = () =>{
    const { value, onClick } = this.props;
    onClick(value);
  }

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