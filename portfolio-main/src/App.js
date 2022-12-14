import './App.css';
import { Route, Routes } from "react-router-dom";

// page imports 
import Navbar from './components/Navbar';
import Main from './components/Main';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
