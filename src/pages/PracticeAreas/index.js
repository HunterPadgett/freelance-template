import imageSav from "../../assets/Savannah.jpg";
import { Link } from "react-router-dom";

export default function PracticeAreas() {
  return (
    <div className="secondarybg text-center ">
      <h1 className="text-white pt-4">Practice Areas</h1>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 content-center gap-4 mt-5 mb-3">
          <div className="rounded-lg shadow-lg  max-w-sm min-h-md border-0">
            <Link to="/RealEstate">
              <img className="" src='https://assets.weforum.org/project/image/cpk1ViuAVr28LDeix3VkGhV7SvT11lq2xkFd3PtgIyE.jpeg'></img>
              
            </Link>
          </div>
          <div className="rounded-lg shadow-lg border-0">
            <Link to="/BusinessLaw">
              <img src='https://www.carbonelawyer.com/wp-content/uploads/2015/03/business-lawyer.jpg' className=" imgSize"></img>
              
            </Link>
          </div>
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
            <Link to="/WillsAndEstates">
              <img src='https://www.collinsandhensley.com/images/services/wils-trusts-estate-lawyer-franklin-nc.jpg'></img>
              Wills and Estates
            </Link>
          </div>
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
            <Link to="/SeriousInjury">
              <img src='https://cdn.shortpixel.ai/spai/w_865+q_glossy+ret_img+to_webp/https://gpslawnc.com/wp-content/uploads/2018/12/iStock-547129964_res.jpg'></img>
              Serious Injury
            </Link>
          </div>
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
            <Link to="/CriminalAndCivilLaw">
              <img src='https://www.brodenmickelsen.com/wp-content/uploads/2019/05/When-Is-Someone-Incompetent-to-Stand-Trial-Law-Office-of-Broden-Mickelsen-LLP-400x300.jpeg'></img>
              Criminal and Civil Law
            </Link>
          </div>
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
            <Link to="/FederalAndStateLaw">
              <img className="rounded-t-md" src='https://upload.wikimedia.org/wikipedia/commons/3/3e/Tomochichi_Federal_Building_and_United_States_Courthouse.jpg'></img>
              Federal and State Law
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:flex justify-center pb-5">
          <div className="rounded-lg shadow-lg bg-white max-w-sm border-0 md:mr-2">
            <Link to="/MaritimeLaw">
              <img src='https://cdn.mos.cms.futurecdn.net/x8cBYkpFynTN7S3R6aSjjV.jpg'></img>
              Maritime Law
            </Link>
          </div>
          <div className="rounded-lg shadow-lg  max-w-sm border-0 flex justify-end md:ml-2">
            <Link to="/CustomsLaw">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3jKMvrmvD-MhBxfYYrWVg2xmgyhgIuFysA&usqp=CAU' className=" -inset-x-1/3"></img>
              Customs and Imports Law
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
