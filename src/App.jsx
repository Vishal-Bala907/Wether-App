import "./App.css";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import CategotyHeader from "./components/CategotyHeader";
// import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import CurrentCondition from "./components/CurrentCondition";
import About from "./components/About";
import FourteenDays from "./components/FourteenDays";
import SevenDay from "./components/SevenDay";
import Threeday from "./components/Threeday";
import Hourly from "./components/Hourly";

function App() {
  const loading = useSelector((state) => state.whether.isWetherLoading);
  console.log(loading);
  return (
    <>
      <Navbar />
      <CategotyHeader />
      {/* {loading ? <h1>Loading please wait</h1> : <Outlet />} */}

      <Routes>
        <Route path="/" element={<CurrentCondition />} />
        <Route path="/current" element={<CurrentCondition />} />
        <Route path="/hourly" element={<Hourly />} />
        <Route path="/three" element={<Threeday />} />
        <Route path="/seven" element={<SevenDay />} />
        <Route path="/fourteen" element={<FourteenDays />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
