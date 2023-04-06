import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./pages/About";
import HousingPage from "./pages/HousingPage";
import Error404 from "./pages/Error404";

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
        errorElement: <Error404 />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Housing",
                element: <HousingPage />
            },
            {
                path: "/about",
                element: <About />
            }
        ],

    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);