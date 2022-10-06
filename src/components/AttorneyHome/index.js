import React from "react";
import { Link } from "react-router-dom";
import "./attorneyHome.css";

const AttorneyHome = () => {
  return (
    <div className="grid flex items-center grid-cols-1 shadow-xl  max-w-fit border-0 attorneyhome">
      <div class="container text-center mt-5">
        <h2 className="text-white text-4xl mb-3 md:text-6xl">
          EXPERIENCED ATTORNEYS
        </h2>

        <p className="mb-3 text-lg text-white ">
          To deliver consistent results, we find that it is crucial to maintain
          the bonds of trust between attorney and client. We are part of the
          community, we will continue to be part of the community, and our
          integrity and duty to our clients shows this commitment.
        </p>
        <p className="mb-3 text-lg text-white">
          We support local initiatives. We act as General Counsel for State and
          Local business and local academic institutions. We are Judges for city
          and county municipalities. We are privileged to be designated as SAAG
          (State Appointed Attorney General) and have served as City and County
          Attorney.
        </p>
        <p className="text-lg text-white">
          We know the pulse of Savannah and the interworking of our local and
          state government. MAHONEY COLE & COURSEY is well-respected for our
          history of excellence and because of the intense knowledge brought to
          every client we serve and to each case we win.
        </p>
      </div>

      <div class="container mt-4">
        <div class="row">
          <div class="col-xl-4 col-md-6 mb-4 ">
            <Link to="TJM">
              <div class="rounded-lg shadow-lg bg-white max-w-sm border-0">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
                  class="card-img-top"
                  alt="avatar"
                ></img>
                <div class="card-body text-center  ">
                  <h6 class="card-title mb-0">Thomas J. Mahoney III</h6>
                  <div class="card-text text-black-50">Senior Partner</div>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-xl-4 col-md-6 mb-4">
            <Link to="JHC">
              <div class="rounded-lg shadow-lg bg-white max-w-sm border-0">
                <img
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                  class="card-img-top"
                  alt="avatar"
                ></img>
                <div class="card-body text-center ">
                  <h6 class="card-title mb-0">James H. Coursey</h6>
                  <div class="card-text text-black-50">Partner</div>
                </div>
              </div>
            </Link>
          </div>

          <div class="col-xl-4 col-md-6 mb-4">
            <Link to="BDS">
              <div class="rounded-lg shadow-lg bg-white max-w-sm border-0">
                <img
                  src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  class="card-img-top"
                  alt="avatar"
                ></img>
                <div class="card-body text-center  ">
                  <h6 class="card-title mb-0">Benjamin D. Summerlin</h6>
                  <div class="card-text text-black-50">Associate</div>
                </div>
              </div>
            </Link>
          </div>

          
        </div>
      </div>
      <button className="mb-5 mt-4 border-none flex flex-row items-center justify-center">
        <Link
          to="/attorneys"
          className="flex border-none flex-row w-1/2 justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white text-decoration-none hover:bg-blue-900 md:py-4 md:px-10 md:text-lg md:w1/5 lg:w-1/6"
        >
          Meet Our Team
        </Link>
      </button>

      {/* <hr class="my-4 mx-auto w-48 h-1 bg-gray-700 rounded border-0 md:my-10 dark:bg-gray-700"/> */}
    </div>
  );
};

export default AttorneyHome;
