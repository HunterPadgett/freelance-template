import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer.js'
import TestData from './components/Home/Test.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/"
            element={[<TestData />, ]}
          />
        </Routes>
        <Footer  />
      </div>
    </Router>
  );
}

export default App;
