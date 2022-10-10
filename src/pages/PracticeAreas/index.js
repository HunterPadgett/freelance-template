import imageSav from "../../assets/Savannah.jpg";
import { Link } from "react-router-dom";

export default function PracticeAreas() {
  return (
    <div className="secondarybg text-center ">
      <h1 className="text-white pt-4">Practice Areas</h1>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 content-center gap-4 mt-5 mb-3">
          <div className="relative ">
            <Link to="/RealEstate">
              <img className="rounded-sm  imgSize opacity-60" src='https://assets.weforum.org/project/image/cpk1ViuAVr28LDeix3VkGhV7SvT11lq2xkFd3PtgIyE.jpeg'></img>
              <h3 className=" centered uppercase text-white tshadow">Real Estate</h3>
            </Link>
          </div>
          <div className="relative ">
            <Link to="/BusinessLaw">
              <img className="rounded-sm shadow-md imgSize opacity-60" src='https://www.carbonelawyer.com/wp-content/uploads/2015/03/business-lawyer.jpg'></img>
              <h3 className=" centered uppercase text-white tshadow">Business Law</h3>
            </Link>
          </div>
          <div className="relative ">
            <Link to="/WillsAndEstates">
              <img className="rounded-sm shadow-md imgSize opacity-60" src='https://www.collinsandhensley.com/images/services/wils-trusts-estate-lawyer-franklin-nc.jpg'></img>
              <h3 className=" centered uppercase text-white tshadow">Wills and Estates</h3>
            </Link>
          </div>
          <div className="relative ">
            <Link to="/SeriousInjury">
              <img className="rounded-sm shadow-md imgSize opacity-60" src='https://cdn.shortpixel.ai/spai/w_865+q_glossy+ret_img+to_webp/https://gpslawnc.com/wp-content/uploads/2018/12/iStock-547129964_res.jpg'></img>
              <h3 className=" centered uppercase text-white tshadow">Serious Injury</h3>
            </Link>
          </div>
          <div className="relative ">
            <Link to="/CriminalAndCivilLaw">
              <img className="rounded-sm shadow-md imgSize opacity-60" src='https://www.brodenmickelsen.com/wp-content/uploads/2019/05/When-Is-Someone-Incompetent-to-Stand-Trial-Law-Office-of-Broden-Mickelsen-LLP-400x300.jpeg'></img>
              <h3 className=" centered uppercase text-white tshadow">Criminal and Civil Law</h3>
            </Link>
          </div>
          <div className="relative ">
            <Link to="/FederalAndStateLaw">
              <img className="rounded-sm shadow-md imgSize opacity-60" src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Tomochichi_Federal_Building_and_United_States_Courthouse.jpg'></img>
              <h3 className=" centered uppercase text-white tshadow">Federal and State Law</h3>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:flex justify-center pb-5">
          <div className="relative  md:mr-2">
            <Link to="/MaritimeLaw">
              <img className="rounded-sm shadow-md imgSize opacity-60" src='https://cdn.mos.cms.futurecdn.net/x8cBYkpFynTN7S3R6aSjjV.jpg'></img>
              <h3 className=" centered uppercase text-white tshadow">Maritime Law</h3>
            </Link>
          </div>
          <div className=" relative  md:ml-2">
            <Link to="/CustomsLaw">
              <img className=" rounded-sm shadow-md imgSize opacity-60" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3jKMvrmvD-MhBxfYYrWVg2xmgyhgIuFysA&usqp=CAU'></img>
              <h3 className=" centered uppercase text-white tshadow">Customs and Imports Law</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
