import React from "react";

class Slots extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;

    const winner = s1 === s2 && s2 === s3;
    // const winner = (this.props.s1 === this.props.s2) && (this.props.s2 === this.props.s3);
    return (
      <div>
        {/* 
        with destructurng, we can just simply use the props name
        <p>{this.props.s1} {this.props.s2} {this.props.s3}</p>
        before and after
        <p>{s1} {s2} {s3}</p>
        */}
        <p>
          {s1} {s2} {s3}
        </p>
        <p>{winner ? "Winner!" : "Loser!"}</p>
      </div>
    );
  }
}

export default Slots;
