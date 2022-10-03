import imageSav from "../../assets/Savannah.jpg";
import { Link } from "react-router-dom";

export default function PracticeAreas() {
  return (
    <div className="secondarybg text-center ">
      <h1 className="text-white pt-4">Practice Areas</h1>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 content-center gap-4 mt-5 mb-3">
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
            <Link to="/RealEstate">
              <img src={imageSav}></img>
              Real Estate
            </Link>
          </div>
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
            <Link to="/BusinessLaw">
              <img src={imageSav}></img>
              Business Law
            </Link>
          </div>
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
            <Link to="/WillsAndEstates">
              <img src={imageSav}></img>
              Wills and Estates
            </Link>
          </div>
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
            <Link to="/SeriousInjury">
              <img src={imageSav}></img>
              Serious Injury
            </Link>
          </div>
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
            <Link to="/CriminalAndCivilLaw">
              <img src={imageSav}></img>
              Criminal and Civil Law
            </Link>
          </div>
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
            <Link to="/FederalAndStateLaw">
              <img className="rounded-t-md" src={imageSav}></img>
              Federal and State Law
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:flex justify-center pb-5">
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0 md:mr-2">
            <Link to="/MaritimeLaw">
              <img src={imageSav}></img>
              Maritime Law
            </Link>
          </div>
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0 flex justify-end md:ml-2">
            <Link to="/CustomsLaw">
              <img src={imageSav}></img>
              Customs and Imports Law
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
