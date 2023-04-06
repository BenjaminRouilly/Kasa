import React from 'react'
import { Link } from 'react-router-dom';
import "./Error404.scss";
import NavBar from '../components/NavBar';
import Main from '../components/Main';

function Error404() {
  return (
      <>
        <NavBar/>
        <Main>
            <div className="error-page">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">Retournez sur la page d'accueil</Link>
            </div>
        </Main>
      </>
  )
}

export default Error404
