import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpCLick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClCLick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpCLick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClCLick}>
          Clear Text
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.length === 0 ? 0 : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {text.length === 0 ? 0 : 0.008 * text.split(" ").length} Minutes Read
        </p>
        <h3>Preview</h3>
        <p> {text}</p>
      </div>
    </>
  );
}

export default TextForm;
