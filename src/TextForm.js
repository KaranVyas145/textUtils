import React, { useState } from "react";

function TextForm(props) {
  // the main text state
  const [text, setText] = useState("");

  // to check wheter the text area is empty and if it is true then the buttons are disabled
  const isEmpty = () => {
    return (
      text.split(" ").filter((element) => {
        return element.length !== 0;
      }).length === 0
    );
  };

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

  // function to remove extra spaces in the text area
  const handleExSpcCLick = () => {
    let newText = text;
    newText = newText.replace(/\s+/g, " ").trim();
    setText(newText);
    console.log(text);
    props.showAlert("Extra spaces cleared", "success");
  };

  // to update the text state on change in text area
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      {/* the style uses a conditional operator to change the text color of the overall page according to the light/dark mode  */}
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          {/* textarea with the value of state text, onChange function to update the text state and style attribute with a class which deals with color and backgroundColor and updates them according to the value of props.mode  */}
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
            }}
          ></textarea>
        </div>
        {/* here we use the isEmpty function for all the buttons in the disabled attribute and from here we can see different buttons calling different functions stated above during onClick event */}
        <button
          disabled={isEmpty()}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpCLick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={isEmpty()}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={isEmpty()}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClCLick}
        >
          Clear Text
        </button>
        <button
          disabled={isEmpty()}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCpyCLick}
        >
          Copy Text
        </button>
        <button
          disabled={isEmpty()}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExSpcCLick}
        >
          Remove extra spaces
        </button>
      </div>
      {/* Here is the text summary section set in a different bootstrap container and the color set in the same manner as the previous container  */}
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        {/* Here the text state is being converted into an array of all the words present in the text by using the split function on " "/empty spaces. Then we use the filter function to remove the elements from the array which consists of just blank spaces and no characters and then we return the length of the array. In this manner blank spaces wont be counted as single words. */}
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and{" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          characters
        </p>
        {/* Here we converted the number words to number of minutes required to read by multiplying it with 0.008 */}
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        {/* The text preview  */}
        <h3>Preview</h3>
        <p> {text}</p>
      </div>
    </>
  );
}

export default TextForm;
