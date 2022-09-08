import { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./TextForm";

function App() {
  const [mode, setmode] = useState("light");
  const [Alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
  }



  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About"
      ></Navbar>
      <Alert alert={"this is alert"}></Alert>
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={mode}></TextForm>
        {/* <About mode={mode}/> */}
      </div>
    </>
  );
}

export default App;
