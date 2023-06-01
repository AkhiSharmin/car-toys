import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import SingUp from "./components/SingUp/SingUp.jsx";
import AuthProvider from "./AuthProvider/AuthProvider";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Blogs from "./components/Blogs/Blogs";
import AddToy from "./components/addToy/addToy";
import AllToy from "./components/AllToy/AllToy";
import MyToy from "./components/MyToy/MyToy";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Update from "./components/MyToy/Update";
import Details from "./components/Banner/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "alltoy",
        element: <AllToy></AllToy>,
        loader: () => fetch("https://car-toys-server-kappa.vercel.app/alltoy"),
      },
      {
        path: "mytoy",
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://car-toys-server-kappa.vercel.app/alltoy/${params.id}`),
      },
      {
        path: "details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`https://car-toys-server-kappa.vercel.app/alltoy/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
