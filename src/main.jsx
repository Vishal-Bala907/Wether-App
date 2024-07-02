import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import configureStore from "./redux/configureStore.js";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import CurrentCondition from "./components/CurrentCondition.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Hourly from "./components/Hourly.jsx";
import Threeday from "./components/Threeday.jsx";
import SevenDay from "./components/SevenDay.jsx";
import FourteenDays from "./components/FourteenDays.jsx";
import About from "./components/About.jsx";
import { HashRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <CurrentCondition />,
//       },
//       {
//         path: "/current",
//         element: <CurrentCondition />,
//       },
//       {
//         path: "/hourly",
//         element: <Hourly />,
//       },
//       {
//         path: "/three",
//         element: <Threeday />,
//       },
//       {
//         path: "/seven",
//         element: <SevenDay />,
//       },
//       {
//         path: "/fourteen",
//         element: <FourteenDays />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={configureStore}>
      {/* <RouterProvider router={router} /> */}
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
// reportWebVitals();
