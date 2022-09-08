import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"></Navbar>
      <div className="container">
        {/* <TextForm heading="Enter the text to analyze"></TextForm> */}
      <About/>
      </div>
    </>
  );
}

export default App;
