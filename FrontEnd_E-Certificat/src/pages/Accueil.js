import React from "react";
import Header from "../components/AccueilHeader";
import "../Styles/Accueil.css";

function Accueil() {
  return (
    <div className="wrapper">
      <Header />
      {/* Add other content for your homepage */}
      <h1>Welcome to the Homepage</h1>
      <p>This is your homepage content.</p>
    </div>
  );
}
export default Accueil;
