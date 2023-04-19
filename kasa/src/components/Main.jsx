// Wrapper pour les children des éléments, ici pour leur mettre du padding
import React from 'react'
import "../styles/Main.scss";

function Main(props) {
    const { children } = props;
  return <div className="main">{children}</div>;
}

export default Main
