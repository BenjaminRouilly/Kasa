import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";

/* L'élément HeaderFooterLayout va avoir une NavBar, un Footer et va injecter 
un outlet au milieu qui sera l'élément qu'on passe dans ses enfants (home, housing etc..)*/
const HeaderFooterLayout = () => {
    return <>
        <NavBar />
        <Main>
            <Outlet />
        </Main>
        <Footer />        
    </>
}

const router = createBrowserRouter([
    {     
        element: <HeaderFooterLayout />,
        errorElement: <h1>404 not found</h1>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Housing",
                element: <h1>Appartement</h1>
            },
            {
                path: "/about",
                element: <h1>A propos</h1>
            }
        ],

    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);