import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./TextForm";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#191a4c";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils : Dark";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode mode has been enabled", "success");
      document.title = "TextUtils";
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
      <Alert alert={alert}></Alert>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              ></TextForm>
            }
          ></Route>
          <Route path="about" element={<About mode={mode} />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
