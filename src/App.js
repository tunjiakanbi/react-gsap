import React from 'react'
import './App.css';
import whale from "./images/whale.jpeg"




function App() {

  return (
    <section className="main">
      <div className="container">
        <>
        <div className="img-container">
          <img src={whale} alt="#" />
        </div>
        </>
      </div>
    </section>
  );
}

export default App;
