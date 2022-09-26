import {useState} from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/NavBar'
import Home from './pages'
import History from './pages/History'
import Attorneys from './pages/Attorneys'
import OurFirm from './pages/OurFirm'
import Contact from './pages/Contact'
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'
import AttorneyHome from './components/AttorneyHome'

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
          <div>
          <Routes>
            <Route path="/" element={[<Home />, <AttorneyHome />]} /> 
            <Route path="/attorneys" element={<Attorneys />} />
            <Route path="/history" element={<History />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/ourfirm" element={<OurFirm/>} />

          </Routes>
          </div>
        <Footer />
      </Router>
    </div>
  );
}







