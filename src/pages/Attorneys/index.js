import React from "react";
import { Link } from "react-router-dom";
import profpic from "../../assets/Profile.jpg";

const Attorneys = () => {
  return (
    <div className="container ">
      <h1>Partners</h1>
      
      <div className="container   ">
        <div className="row d-flex justify-content-between">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
            <Link to="/TJM" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt=""
              />
            </Link>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Thomas J. Mahoney III
              </h5>
              <p class="text-gray-700 text-base mb-4">Senior Partner</p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <Link to="/JHC" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt=""
              />
            </Link>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                James H. Coursey
              </h5>
              <p class="text-gray-700 text-base mb-4">Senior Partner</p>
            </div>
          </div>
        </div>


        <hr className="mb-5 mt-5" />


        <h1>Associates</h1>
        <div className="container">
          <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <Link to="/BDS" data-mdb-ripple="true" data-mdb-ripple-color="light">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
                alt=""
              />
            </Link>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Benjamin D. Summerlin
              </h5>
              <p class="text-gray-700 text-base mb-4">Associate</p>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
};

export default Attorneys;
