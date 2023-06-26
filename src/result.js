import React from "react";

class Result extends React.Component {
  constructor(props){
    super(props);
    this.state={
      number: this.props.value,
    };
  }

  render() {
    return (
      <button
        className={this.state.number ? "seat" : "noneSeat"}
        onClick={()=>{this.setState({number:this.props.value})}}>
          {this.state.number}
      </button>
    );
  }
}

export default Result