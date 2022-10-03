import React from "react";

const TJM = () => {
  return (
    <div>
      <div className="name bg grid-cols-1 center-text">
        <h2 className="">Thomas J. Mahoney III</h2>
        <h3 className="">Senior Partner</h3>
      </div>

      <div className="grid-cols-1 md:grid-cols-2">
        <div className="col-md-6 col-12-sm mb-5">
          <img
            className="profpic"
            src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
            alt=""
          />
        </div>
        <div className=" bio scrollable col-md-6 col-12-sm">
          <div className="col-12">
            <h3>Practice Areas</h3>
            <ul>
              <li>Commercial and Residential Real Estate</li>
              <li>Business and Corporate Law</li>
              <li>Maritime Law</li>
              <li>Civil Litigation</li>
              <li>Personal Injury</li>
            </ul>
          </div>
          <div className="col-12">
            <h3>Education</h3>
            <ul>
              <li>Juris Doctor, 1988 – University of Georgia School of Law</li>
              <li>Bachelor of Arts, 1985 – University of Georgia</li>
              <li>Class of 1981 – Benedictine Military School</li>
            </ul>
          </div>
          <div className="col-12">
            <h3>Legal Experience</h3>
            <ul>
              <li>Admitted to the State Bar of Georgia in 1988</li>
              <li>Chairman, Chatham County Board of Elections</li>
              <li>Class of 1981 – Benedictine Military School</li>
              <li>
                Admitted to practice in the GA Supreme Court, GA Court of
                Appeals, SC Supreme Court, SC Court of Appeals,
              </li>
              <li>
                U.S. Supreme Court, U.S. Court of Appeals 4th and 11th Circuits,
                the U.S. District Courts for the Southern District of GA and
                District of SC
              </li>
              <li>
                Special Assistant Attorney General (SAAG) Georgia Ports
                Authority 1987 – Present
              </li>
              <li>
                Special Assistant Attorney General for the GA Department of
                Transportation 1999 – Present
              </li>
              <li>General Counsel, Benedictine Military School</li>
              <li>General Counsel, St. Patrick’s Day Parade Committee</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TJM;
