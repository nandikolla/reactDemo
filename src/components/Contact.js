import { useState } from "react";

import ShowComment from "./ShowComment";

const Contact = () => {
  const [message, setMessage] = useState();
  const [commentData, setCommentData] = useState([]);

  const addComment = () => {
    console.log("-----", message);
    setCommentData([
      ...commentData,
      {
        author: "Divya",
        message: message,
      },
    ]);
    console.log(commentData);
  };

  return (
    <div className="about">
      <div>
        <input
          className="p-2 border border-black"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button className="m-4 p-2 bg-green-300 border" onClick={addComment}>
          Add Comment
        </button>
      </div>
      <div>
        {commentData.length > 0 &&
          commentData.map((comment) => <ShowComment />)}
      </div>
    </div>
  );
};

export default Contact;
