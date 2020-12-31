/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", { title }); //como segundo argumento pasamos el body de nuestra request, en este caso el titulo del post
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label> Title </label>
          <input
            type="text"
            value={title}
            id={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
          <button className="btn btn-primary"> Submit </button>
        </div>
      </form>
    </div>
  );
};
