import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Main from './components/Main'
import About from './pages/About'
import HousingPage from './pages/HousingPage'
import Error404 from './pages/Error404'

/* L'élément HeaderFooterLayout va avoir une NavBar, un Footer et va injecter 
un outlet au milieu qui sera l'élément qu'on passe dans ses enfants (home, housing etc..)*/
const HeaderFooterLayout = () => {
  return (
    <>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

/* On définit les routes de l'application grâce à la fonction createBrowserRouter. 
Elle prend en argument un tableau d'objets qui contient les informations de chaque route, avec les composants associés 
"path" pour spécifier le chemin de l'URL correspondant à la route, "element" pour spécifier le composant React à afficher lorsque cette route est atteinte*/
const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/housing/:id',
        element: <HousingPage />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])

/* La méthode ReactDOM.createRoot est utilisée pour créer un "root" React à partir d'un élément DOM existant sur la page HTML. 
Ici l'élément DOM est récupéré en utilisant document.getElementById('root') 
La méthode render est ensuite appelée sur le root React créé, en passant en paramètre un élément React, qui est ici créé en utilisant la syntaxe JSX.
Dans cet élément JSX, on utilise la balise <React.StrictMode> pour activer le mode strict de React, qui permet de détecter certaines erreurs communes 
dans le code et de les afficher dans la console du navigateur.
À l'intérieur de cette balise, on utilise le composant RouterProvider fourni par la librairie react-router-dom, qui va fournir un contexte pour la navigation dans l'application. 
Le contexte est créé en utilisant l'objet router défini plus haut, qui définit les différentes routes et les composants qui doivent être affichés en fonction de l'URL.*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
