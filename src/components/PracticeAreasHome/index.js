import React from "react";
import { Link } from "react-router-dom";

const PracticeAreasHome = () => {
  return (
    <div className="grid flex items-center grid-cols-1 rounded-lg shadow-lg max-w-fit border-0 bgpractice">
      <div class="container text-center mt-5 ">
        <h2 className="text-black  text-4xl mb-3 md:text-6xl">
          A Diverse General Practice
        </h2>
        <h3 className="text-2xl mb-3 md:text-4xl">
          Covering All of Your Legal Needs
        </h3>
        <div className="">
          <p className="mb-3 text-lg md:text-xl">
            One of Savannah’s oldest and most respected firms, MAHONEY COLE &
            COURSEY has a history of providing high quality legal solutions for
            individuals, small businesses and large corporations. Our firm has
            been winning cases and counseling clients with unsurpassed legal
            knowledge for eight decades. Providing top corporations in the area
            as well as individuals with sound advice, iron clad negotiations,
            and anticipated results; MAHONEY COLE & COURSEY is the choice for
            your legal needs in Georgia and South Carolina.
          </p>
          <p className="mb-3 text-lg md:text-xl">
            Let us achieve results as we provide continuity rarely found in law
            firms today. Ours is a family-founded firm, working in the community
            for three generations. Whether you are starting a business, closing
            on a real estate property or home, working on your Estate Plan, or
            need legal help in Court – our lawyers provide exemplary legal
            solutions and the outcome you desire.
          </p>
          <p className="text-lg md:text-xl">
            We are committed to the community. We will be around when a problem
            arises and you will be able to hold your head high knowing you have
            Savannah's best and most respected legal team at your back.
          </p>
        </div>
      </div>

      <div className="mt-3 mb-3 flex-row justify-center items-center text-lg container ">
        <div className="flex items-center row justify-center">
          <div class="flex justify-center col-xl-4 col-md-4 col-sm-12  ">
            <ul class=" space-y-1 max-w-md list-inside text-black dark:text-gray-400">
              <li class="">
                <i class="fa-solid fa-chevron-right"></i>&nbsp; Civil Litigation
              </li>
              <li class="">
                <i class="fa-solid fa-chevron-right"></i>&nbsp; Business Law
              </li>
              <li class="">
                <i class="fa-solid fa-chevron-right"></i>&nbsp; Will and Estates
              </li>
              <li class="">
                <i class="fa-solid fa-chevron-right"></i>&nbsp; Insurance
                Defense
              </li>
            </ul>
          </div>
          <div class="flex justify-center col-xl-4 col-md-4 col-sm-12  ">
            <ul class="grid-cols-1 space-y-1 max-w-md list-inside text-black dark:text-gray-400">
              <li class=" items-center">
                <i class="fa-solid fa-chevron-right"></i>&nbsp; Serious Injury
              </li>
              <li class=" items-center">
                <i class="fa-solid fa-chevron-right"></i>&nbsp; Real Estate
              </li>
              <li class=" items-center">
                <i class="fa-solid fa-chevron-right"></i>&nbsp; Criminal Law
              </li>
              <li class=" items-center">
                <i class="fa-solid fa-chevron-right"></i>&nbsp; Business
                Representation
              </li>
            </ul>
          </div>
          <div class="flex justify-center col-xl-4 col-md-4 col-sm-12  ">
            <ul class="grid-cols-1 space-y-1 max-w-md list-inside text-black dark:text-gray-400">
              <li class=" items-center">
                <i class="fa-solid fa-chevron-right"></i>&nbsp; Local Government
                Law
              </li>
              <li class=" items-center">
                <i class="fa-solid fa-chevron-right"></i>&nbsp; Admirality
              </li>
              <li class=" items-center">
                <i class="fa-solid fa-chevron-right"></i>&nbsp; Maritime Law
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="flex  justify-center"></div>
        <div className="flex  items-center justify-center"></div> */}
      </div>
      <button className="mb-5 mt-2 border-none flex flex-row items-center justify-center">
        <a
          href="/practice-areas"
          className="flex border-none flex-row w-1/2 justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-blue-800 md:py-4 md:px-10 md:text-lg md:w1/4 lg:w-1/5"
        >
          Learn More
        </a>
      </button>

      {/* <hr class="my-4 mx-auto w-48 h-1 bg-gray-700 rounded border-0 md:my-10 dark:bg-gray-700" /> */}
    </div>
  );
};

export default PracticeAreasHome;
