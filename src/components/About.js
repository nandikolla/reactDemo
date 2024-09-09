import React from "react";

import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about">
        <h1>About US</h1>
        <UserClass name={"Divya Class"} location={"India Class"} />
      </div>
    );
  }
}

export default About;
