import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import {createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <h1>404 not found</h1>
    },
    {
        path: "/Housing",
        element: <h1>Nos appartements /</h1>
    },
    {
        path: "/About",
        element: <h1>A propos /</h1>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);