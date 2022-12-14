import { useState } from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import TopBtn from "./components/TopBtn";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages";
import History from "./pages/History";
import Attorneys from "./pages/Attorneys";
import PracticeAreas from "./pages/PracticeAreas";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AttorneyHome from "./components/AttorneyHome";
import PracticeAreasHome from "./components/PracticeAreasHome";
import HistoryHome from "./components/HistoryHome";
import TJM from "./pages/Attorneys/TJM";
import JLC from "./pages/Attorneys/JLC";
import BDS from "./pages/Attorneys/BDS";
import RealEstate from "./pages/PracticeAreas/RealEstate";
import BusinessLaw from "./pages/PracticeAreas/BusinessLaw";
import CriminalAndCivilLaw from "./pages/PracticeAreas/CriminalAndCivilLaw";
import MaritimeLaw from "./pages/PracticeAreas/MaritimeLaw";
import SeriousInjury from "./pages/PracticeAreas/SeriousInjury";
import WillsAndEstates from "./pages/PracticeAreas/WillsAndEstates";
import FederalAndStateLaw from "./pages/PracticeAreas/FederalAndStateLaw";
import CustomsLaw from "./pages/PracticeAreas/CustomsLaw";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <HashRouter>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <TopBtn />
        <div className="mainContent">
          <ScrollToTop>
            <Routes>
              <Route
                path="/"
                element={[
                  <Home />,
                  <PracticeAreasHome />,
                  <AttorneyHome />,
                  <HistoryHome />,
                ]}
              />
              <Route path="/attorneys" element={<Attorneys />} />
              <Route path="/history" element={<History />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/practice-areas" element={<PracticeAreas />} />
              <Route path="/TJM" element={<TJM />} />
              <Route path="/JLC" element={<JLC />} />
              <Route path="/BDS" element={<BDS />} />
              <Route path="/RealEstate" element={<RealEstate />} />
              <Route path="/BusinessLaw" element={<BusinessLaw />} />
              <Route
                path="/CriminalAndCivilLaw"
                element={<CriminalAndCivilLaw />}
              />
              <Route path="/MaritimeLaw" element={<MaritimeLaw />} />
              <Route path="/SeriousInjury" element={<SeriousInjury />} />
              <Route path="/WillsAndEstates" element={<WillsAndEstates />} />
              <Route
                path="/FederalAndStateLaw"
                element={<FederalAndStateLaw />}
              />
              <Route path="/CustomsLaw" element={<CustomsLaw />} />
            </Routes>
          </ScrollToTop>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}
