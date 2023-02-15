import React from "react";
import { Link } from "react-router-dom";
import "./Attorneys.css";

const Attorneys = () => {
 return (
  <div className="secondarybg">
   <h1 className="text-white p-3 md:text-5xl flex justify-center">Partners</h1>

   <div className="container mx-auto">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
     <div class="flex-row justify-center  rounded-lg shadow-lg bg-white max-w-xs lg:max-w-sm mx-auto mb-1">
      <Link to="/TJM">
       <img
        class=""
        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt=""
       />
      </Link>
      <div class="flex-row">
       <h5 class="text-gray-900 text-center text-xl font-medium mt-2 mb-2">
        Thomas J. Smith III
       </h5>
       <p class="text-gray-900 text-center text-base mb-2">Senior Partner</p>
      </div>
     </div>
     <div class="flex-row justify-center  rounded-lg shadow-lg bg-white max-w-xs lg:max-w-sm  mx-auto mb-1">
      <Link to="/JLC">
       <img
        class=""
        src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
        alt=""
       />
      </Link>
      <div class="">
       <h5 class="text-gray-900 text-center text-xl font-medium mt-2 mb-2">
        James L. Greenburg
       </h5>
       <p class="text-gray-900 text-center text-base mb-2">Senior Partner</p>
      </div>
     </div>
    </div>
   </div>
   <hr className="mb-3 mt-3" />

   <h1 className="text-white p-3 md:text-5xl flex justify-center">
    Associates
   </h1>
   <div className="container mx-auto ">
    <div className="grid grid-cols-1 pb-5">
     <div class="flex-row justify-center  rounded-lg shadow-lg bg-white max-w-xs mx-auto lg:max-w-sm ">
      <Link to="/BDS">
       <img
        class=""
        src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        alt=""
       />
      </Link>
      <div class="">
       <h5 class="text-gray-900 text-center text-xl font-medium mt-2 mb-2">
        Benjamin D. Butters
       </h5>
       <p class="text-gray-900 text-center text-base mb-2">Associate</p>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Attorneys;
