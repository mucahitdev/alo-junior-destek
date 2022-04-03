import './App.css';
import { AddLinkedin, Githup, Linkedin } from './pages';
import { Navbar } from './components';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App container mx-auto ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Linkedin />} />
        <Route path="githup" element={<Githup />} />
        <Route path="add-linkedin" element={<AddLinkedin />} />
      </Routes>


    </div>
  );
}

export default App;
