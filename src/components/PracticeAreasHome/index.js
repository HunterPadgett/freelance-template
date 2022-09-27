import React from "react";
import { Link } from "react-router-dom";


const PracticeAreasHome = () => {
  return (
    <div className="grid flex items-center grid-cols-1">
      <div class="container text-center mt-5">
        <h2 className="text-black text-4xl mb-3 md:text-6xl">
          A Legal Traditon Since 1935
        </h2>
        <h3 className="text-3xl mb-3 md:text-4xl">
          Longstanding and Desired Results
        </h3>
        <p className="mb-3">
          One of Savannah’s oldest and most respected firms, MAHONEY COLE & COURSEY has a history of providing high quality legal solutions for individuals, small businesses and large corporations. Our firm has been winning cases and counseling clients with unsurpassed legal knowledge for eight decades. Providing top corporations in the area as well as individuals with sound advice, iron clad negotiations, and anticipated results; MAHONEY COLE & COURSEY is the choice for your legal needs in Georgia and South Carolina.
        </p>
        <p className="mb-3">
           Let us achieve results as we provide continuity rarely found in law firms today. Ours is a family-founded firm, working in the community for three generations.  Whether you are starting a business, closing on a real estate property or home, working on your Estate Plan, or need legal help in Court – our lawyers provide exemplary legal solutions and the outcome you desire
        </p>
        <p className="">
          We are committed to the community. We will be around when a problem arises and you will be able to hold your head high knowing you have Savannah's best and most respected legal team at your back.
        </p>
      </div>
      <button className="mb-2 mt-2 border-none flex flex-row items-center justify-center">
        <a
          href="/Attorneys"
          className="flex border-none flex-row w-1/2 justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg md:w1/5 lg:w-1/6"
        >
          Meet Our Team
        </a>
      </button>

      <div class="container mt-4">
        <div class="row">
          <div class="col-xl-3 col-md-6 mb-4 ">
            <div class="rounded-lg shadow-lg bg-white max-w-sm border-0">
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
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="rounded-lg shadow-lg bg-white max-w-sm border-0">
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
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="rounded-lg shadow-lg bg-white max-w-sm border-0">
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
          <div class="col-xl-3 col-md-6 mb-4">
            <div class="rounded-lg shadow-lg bg-white max-w-sm border-0">
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
  );
};

export default PracticeAreasHome;