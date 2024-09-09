import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("child constructor");
  }

  async componentDidMount() {
    console.log("Child component did mount");

    const data = await fetch("https://api.github.com/users");
    const json = await data.json();
    this.setState({
      userInfo: json[0],
    });

    //prints message on every second
    this.timer = setInterval(() => {
      console.log("inside the Class setTimer ");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    if (this.state.count2 !== prevState.count2) {
      console.log("ComponentDidUpdate");
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    console.log("child render");
    const { login, location } = this.state.userInfo;
    const { count, count2 } = this.state;

    return (
      <div className="user">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Count
        </button>
        <h1>Count2 : {count2}</h1>
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: Divya@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
