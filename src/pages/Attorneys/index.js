import React from "react";
import profpic from "../../assets/Profile.jpg";

const Attorneys = () => {
  return (
    <div className="container ">
      <h1>Attorneys</h1>

      <div className="container   ">
        <div className="row d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-center ">
            <img className=" col profpic " src={profpic} />
            <h2>Ben Dover</h2>
            <hr/>
            <p>Senior Partner</p>
          </div>
          <div className="d-flex flex-column justify-content-center ">
            <img className=" col profpic " src={profpic} />
            <h2>Hugh Jass</h2>
            <hr/>
            <p>Senior Partner</p>
          </div>
          <div className="d-flex flex-column justify-content-center ">
            <img className=" col profpic " src={profpic} />
            <h2>Biggus Dickus</h2>
            <hr/>
            <p>Associate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attorneys;
