import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Services from "./Component/Services";
import LogIn from "./Component/LogIn";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
        </div>
    );
}
export default App;
