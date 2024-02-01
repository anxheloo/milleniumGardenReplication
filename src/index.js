import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import ErrorPage from "./screens/ErrorPage";
import { AboutUs } from "./screens/AboutUs";
import CommingSoon from "./screens/CommingSoon";
import { ContactUs } from "./screens/ContactUs";
import Entertainment from "./screens/Entertainment";
import Hospitality from "./screens/Hospitality";
import RealEstate from "./screens/RealEstate";
import WhatWeDo from "./screens/WhatWeDo";
import { Projects } from "./screens/Projects";
import TribeProject from "./screens/TribeProject";
import MilleniumProject from "./screens/MilleniumProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "/about-us",
    element: <AboutUs></AboutUs>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "/comming-soon",
    element: <CommingSoon></CommingSoon>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "/contact-us",
    element: <ContactUs></ContactUs>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "/entertainment",
    element: <Entertainment></Entertainment>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "/hospitality",
    element: <Hospitality></Hospitality>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "/real-estate",
    element: <RealEstate></RealEstate>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "/what-we-do",
    element: <WhatWeDo></WhatWeDo>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "/projects",
    element: <Projects></Projects>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "/projects/tribe",
    element: <TribeProject></TribeProject>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  {
    path: "/projects/millenium-garden",
    element: <MilleniumProject></MilleniumProject>,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
Steps for React Router Dom

1-We install: npm install react-router-dom localforage match-sorter sort-by
2-we import in index.js file : import { createBrowserRouter, RouterProvider } from "react-router-dom";
3-We create the list of our links: const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
  },   {
    path: "/about-us",
    element: <AboutUs></AboutUs>,
    errorElement: <ErrorPage></ErrorPage>,
  },])   and so on.

  4-To navigate between pages we use Link component instead of <a></a> - (Note: a tag will perform worse because it will require a full reload of the page again instead of Link that opens it instantently) tag: import { Link } from "react-router-dom"; example:
      <Link to={"/"}>
        <div>Back to home page</div>
      </Link>

  5-When we do something like :    we can get the parameter id by using: import {useParams} from 'react-router-dom and than : const params = useParams(), so we get the id and than fetch the datas we want
  {
    path: "/projects/:id",
    element: <Projects></Projects>,
    errorElement: <ErrorPage></ErrorPage>,
  },
*/
