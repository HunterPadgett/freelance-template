import React from "react";
import "./attorneyHome.css";

const AttorneyHome = () => {
  return (
    <div className="grid flex items-center grid-cols-1">
      <div class="container text-center mt-5">
        <h2 className="text-4xl mb-3 md:text-6xl">EXPERIENCED ATTORNEYS</h2>
        <h3 className="text-3xl mb-3 md:text-4xl">
          A Diverse General Practice
        </h3>
        <p className="mb-3">
          To deliver consistent results, we find that it is crucial to maintain
          the bonds of trust between attorney and client. We are part of the
          community, we will continue to be part of the community, and our
          integrity and duty to our clients shows this commitment.
        </p>
        <p className="mb-3">
          We support local initiatives. We act as General Counsel for State and
          Local business and local academic institutions. We are Judges for city
          and county municipalities. We are privileged to be designated as SAAG
          (State Appointed Attorney General) and have served as City and County
          Attorney.
        </p>
        <p className="">
          We know the pulse of Savannah and the interworking of our local and
          state government. MAHONEY COLE & COURSEY is well-respected for our history of
          excellence and because of the intense knowledge brought to every
          client we serve and to each case we win.
        </p>
      </div>

      <div class="container mt-4">
        <div class="row">
          <div class="col-xl-3 col-md-6 mb-4 ">
            <div class="card border-0 ">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                      class="card-img-top"
                      alt="avatar"
                    ></img>
                    <div class="card-body text-center  ">
                      <h5 class="card-title mb-0">Member One</h5>
                      <div class="card-text text-black-50">Team Lead</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 ">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                      class="card-img-top"
                      alt="avatar"
                    ></img>
                    <div class="card-body text-center ">
                      <h5 class="card-title mb-0">Member Two</h5>
                      <div class="card-text text-black-50">Web Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 ">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                      class="card-img-top"
                      alt="avatar"
                    ></img>
                    <div class="card-body text-center  ">
                      <h5 class="card-title mb-0">Member Three</h5>
                      <div class="card-text text-black-50">Software Tester</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 ">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src="https://images.unsplash.com/photo-1473700216830-7e08d47f858e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                      class="card-img-top"
                      alt="avatar"
                    ></img>
                    <div class="card-body text-center ">
                      <h5 class="card-title mb-0">Member Four</h5>
                      <div class="card-text text-black-50">Web Designer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttorneyHome;
