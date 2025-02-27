/** @format */
import React from "react";
import { AVAILABLE_ARTS } from "./data.js";
import Card from "./components/Card.jsx";
function App() {
  return (
    <>
      {/* Your code  here */}
      <header>
        <h1>Welcome to the GALLER</h1>
        <p>The gallery that anyone could witness to different arts</p>
      </header>
      <body>
        <h2>Each with a unique design and approach</h2>
        <div className='container'>
          {AVAILABLE_ARTS.map((art) => (
            <Card {...art} />
          ))}
        </div>
      </body>
    </>
  );
}

export default App;
