import thisS from "../../assets/blueLogo.png";
import {Link} from 'react-router-dom'

export default function History() {
  return (
    <div className="pikachu">
      <h1>History</h1>
      <div className="w-96 h-24">
        <img
          className="h-20 inline"
          src={thisS}
          alt="Logo"
        ></img>
        <h1 className="inline text-sm pikachu">
          <span className="text-xl">M</span>AHONEY,{" "}
          <span className="text-xl">C</span>OLE &{" "}
          <span className="text-xl">C</span>OURSEY{" "}
          <span className="text-xs">PC</span>
        </h1>
        <h1 className="text-sm text-center -mt-9">ATTORNEYS AT LAW</h1>
      </div>
    </div>
  );
}
