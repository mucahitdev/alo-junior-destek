import './App.css';
import { AddGithub, AddLinkedin, Linkedin } from './pages';
import { Navbar } from './components';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App container mx-auto ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Linkedin />} />
        <Route path="add-github" element={<AddGithub />} />
        <Route path="add-linkedin" element={<AddLinkedin />} />
      </Routes>


    </div>
  );
}

export default App;
