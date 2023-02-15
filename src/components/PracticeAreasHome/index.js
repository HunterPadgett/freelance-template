import React from "react";
import { Link } from "react-router-dom";
import "./PracticeAreas.css";

const PracticeAreasHome = () => {
 return (
  <div className="grid items-center grid-cols-1 rounded-lg shadow-lg max-w-fit border-0 bgpractice siteBlue">
   <div class="container text-center mt-5 ">
    <h2 className="text-4xl mb-3 md:text-6xl  text-gray-900">
     A Diverse General Practice
    </h2>
    <h3 className="text-2xl mb-3 md:text-4xl ">
     Covering All of Your Legal Needs
    </h3>
    <div className="">
     <p className="mb-3 text-lg text-gray-900 md:text-xl ">
      One of Savannah’s oldest and most respected firms, SMITH JONES & GREENBURG
      has a history of providing high quality legal solutions for individuals,
      small businesses and large corporations. Our firm has been winning cases
      and counseling clients with unsurpassed legal knowledge for eight decades.
      Providing top corporations in the area as well as individuals with sound
      advice, iron clad negotiations, and anticipated results; SMITH JONES &
      GREENBURG is the choice for your legal needs in Georgia and South
      Carolina.
     </p>
     <p className="mb-3 text-lg text-gray-900 md:text-xl">
      Let us achieve results as we provide continuity rarely found in law firms
      today. Ours is a family-founded firm, working in the community for three
      generations. Whether you are starting a business, closing on a real estate
      property or home, working on your Estate Plan, or need legal help in Court
      – our lawyers provide exemplary legal solutions and the outcome you
      desire.
     </p>
     <p className="text-lg text-gray-900 md:text-xl">
      We are committed to the community. We will be around when a problem arises
      and you will be able to hold your head high knowing you have Savannah's
      best and most respected legal team at your back.
     </p>
    </div>
   </div>

   <div className="container">
    <div className="mt-3 mb-3 grid grid-cols-1 md:text-lg md:grid-cols-3">
     <ul class="flex-row justify-center mx-auto space-y-1 list-inside dark:text-gray-900 pr-5 md:p-0">
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
       <i class="fa-solid fa-chevron-right"></i>&nbsp; Insurance Defense
      </li>
     </ul>

     <ul class="flex-row justify-center mx-auto space-y-1  list-inside dark:text-gray-900">
      <li class=" ">
       <i class="fa-solid fa-chevron-right"></i>&nbsp; Serious Injury
      </li>
      <li class=" ">
       <i class="fa-solid fa-chevron-right"></i>&nbsp; Real Estate
      </li>
      <li class=" ">
       <i class="fa-solid fa-chevron-right"></i>&nbsp; Criminal Law
      </li>
      <li class=" ">
       <i class="fa-solid fa-chevron-right"></i>&nbsp; Business Representation
      </li>
     </ul>

     <ul class="flex-row justify-center mx-auto space-y-1  list-inside dark:text-gray-900">
      <li class=" ">
       <i class="fa-solid fa-chevron-right"></i>&nbsp; Local Government Law
      </li>
      <li class="">
       <i class="fa-solid fa-chevron-right"></i>&nbsp; Admirality
      </li>
      <li class=" ">
       <i class="fa-solid fa-chevron-right"></i>&nbsp; Maritime Law
      </li>
     </ul>
    </div>
   </div>
   <button className="mb-5 mt-2 border-none flex flex-row items-center justify-center">
    <Link
     to="/practice-areas"
     className="flex border-none flex-row w-1/2 justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white text-decoration-none hover:bg-blue-900 md:py-4 md:px-10 md:text-lg md:w1/4 lg:w-1/5"
    >
     Learn More
    </Link>
   </button>

   {/* <hr class="my-4 mx-auto w-48 h-1 bg-gray-700 rounded border-0 md:my-10 dark:bg-gray-700" /> */}
  </div>
 );
};

export default PracticeAreasHome;
