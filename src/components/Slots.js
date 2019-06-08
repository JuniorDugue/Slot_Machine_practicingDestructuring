import React from "react";

class Slots extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.s1} {this.props.s2} {this.props.s3}</p>
        <p>Winner/Loser</p>
      </div>
    )
  }
}

export default Slots;
