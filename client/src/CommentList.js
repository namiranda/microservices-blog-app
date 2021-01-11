import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    console.log("comment: " + comment.content);
    return <li key={comment.id}>{comment.content}</li>;
  });

  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
};
