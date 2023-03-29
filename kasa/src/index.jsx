import React from 'react';
import ReactDOM from 'react-dom/client';
/* import './styles/index.css'; */
/* import App from './pages/Home'; */
import Home from './pages/Home';
import Survey from './pages/Survey';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// création des routes
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />}/>
            </Routes> 
        </Router>
    </React.StrictMode>
);