
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
      <Router>
      <Navbar/>
      <Routes>
        <Ro exact path="/" element={<Home/>} 
      </Routes>
    <Home/>

      </Router>
   
    </div>
  );
}

export default App;
