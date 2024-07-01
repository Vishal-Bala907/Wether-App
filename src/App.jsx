import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import CategotyHeader from "./components/CategotyHeader";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const loading = useSelector((state) => state.whether.isWetherLoading);
  console.log(loading);
  return (
    <>
      <Navbar />
      <CategotyHeader />
      {loading ? <h1>Loading please wait</h1> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
