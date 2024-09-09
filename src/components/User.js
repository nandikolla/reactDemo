import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  userEffect(() => {
    // API call

    const timer = setInterval(() => {
      console.log("---inside function timer---");
    }, 1000);

    return () => {
      //clear the timer here
      clearInterval(timer);
      console.log("timer cleared in functional component");
    };
  }, [count, count2]);

  return (
    <div className="user">
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h4>Contact: Divya@gmail.com</h4>
    </div>
  );
};

export default User;
