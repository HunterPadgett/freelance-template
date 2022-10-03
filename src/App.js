import {useState} from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/NavBar'
import TopBtn from './components/TopBtn'
import Home from './pages'
import History from './pages/History'
import Attorneys from './pages/Attorneys'
import PracticeAreas from './pages/PracticeAreas'
import Contact from './pages/Contact'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import AttorneyHome from './components/AttorneyHome'
import PracticeAreasHome from './components/PracticeAreasHome'
import HistoryHome from './components/HistoryHome'
import TJM from './pages/Attorneys/TJM'
import JHC from './pages/Attorneys/JHC'
import BDS from './pages/Attorneys/BDS'


export default function App() {

  const [isOpen, setIsOpen] = useState(false)
const toggle = () => {
  setIsOpen(!isOpen)
}
  return (
    <div>
      <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <TopBtn />
          <div className="mainContent">
          <Routes>
            <Route path="/" element={[<Home />, <PracticeAreasHome />, <AttorneyHome />, <HistoryHome />]} /> 
            <Route path="/attorneys" element={<Attorneys />} />
            <Route path="/history" element={<History />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/practice-areas" element={<PracticeAreas/>} />
            <Route path="/TJM" element={<TJM/>}/>
            <Route path="/JHC" element={<JHC/>}/>
            <Route path="/BDS" element={<BDS/>}/>

          </Routes>
          </div>
        <Footer />
      </Router>
    </div>
  );
}







