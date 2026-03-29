import "./App.css";

import { Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import NavBar from "./components/NavBar";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="bg-white text-black dark:bg-[#1a1a2e] dark:text-white transition">
      <NoteState>
        <NavBar />
        <ToastContainer position="top-right" autoClose={1500} />
        <div className="max-w-6xl mx-auto mt-6 px-4">
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </NoteState>
    </div>
  );
}

export default App;
