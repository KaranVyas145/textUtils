import React, { useState } from "react";

function TextForm(props) {
  // the main text state
  const [text, setText] = useState("");

  //   function to convert the text in textbox to uppercase
  const handleUpCLick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  //   function to convert the text in textbox to lowercase
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  //   function to clear the text in textbox
  const handleClCLick = () => {
    setText("");
    props.showAlert("Cleared the text", "success");
  };

  //   function to copy the text to clipboard
  const handleCpyCLick = () => {
    let newText = text;
    navigator.clipboard.writeText(newText);
    props.showAlert("Converted to uppercase", "success");
    props.showAlert("Text copied", "success");
  };

  const handleExSpcCLick = () => {
    let newText = text;
    newText = newText.replace(/\s+/g, " ").trim();
    setText(newText);
    console.log(text);
    props.showAlert("Extra spaces cleared","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container mt-5"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpCLick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleClCLick}>
          Clear Text
        </button>
        <button className="btn btn-primary m-2" onClick={handleCpyCLick}>
          Copy Text
        </button>
        <button className="btn btn-primary m-2" onClick={handleExSpcCLick}>
          Remove extra spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
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
