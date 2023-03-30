import React from "react";
import NavBar from "../components/NavBar.jsx";
import Banner from "../components/Banner.jsx";
import HousingGrid from "../components/HousingGrid.jsx";
import Main from "../components/Main.jsx";
import "../Home.css";

function Home() {
    return (
        <div>
            <NavBar />
            <Main>
                <Banner />
                <HousingGrid />
            </Main>
        </div>
    );
  }
  export default Home