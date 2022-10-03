import imageSav from '../../assets/Savannah.jpg'

export default function PracticeAreas() {


    return (
      <div className='container'>
<h1>Practice Areas</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-5">
        <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
        <img src={imageSav}></img>
          Real Estate
          </div>
        <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
          <img src={imageSav}></img>
          Business Law
          </div>
        <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
        <img src={imageSav}></img>
        Wills and Estates
        </div>
        <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
        <img src={imageSav}></img>
        Serious Injury
        </div>
        <div className="rounded-lg shadow-lg bg-white max-w-sm border-0"> 
        <img src={imageSav}></img>
        Criminal and Civil Law
        </div>
        <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
        <img src={imageSav}></img>
        Federal and State Law
          </div>
        <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
        <img src={imageSav}></img>
        Maritime Law
          </div>
        <div className="rounded-lg shadow-lg bg-white max-w-sm border-0">
        <img src={imageSav}></img>
        Customs and Imports Law
          </div>
       

      </div>
      </div>
    );
  }