import React, { useState } from "react";

function About(props) {
  // let [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   buttonText: "Enable Dark Mode",
  // });

  // const toggleStyle = () => {
  //   if (myStyle.backgroundColor === '#212529') {
  //     console.log(true);
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       buttonText: "Enable Dark Mode",
  //     });
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "#212529",
  //       buttonText: "Disable Dark Mode",
  //       border: "1px solid white",
  //     });
  //   }
  // };


  return (
    <div className="container"  style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
               style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
               style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
               style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {myStyle.buttonText}
        </button>
      </div> */}
    </div>
  );
}

export default About;
