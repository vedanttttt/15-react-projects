import React from "react";
import Review from "./Review";
// import { FaGithubSquare } from "react-icons/fa";
function App() {
  // return <h2>{/* reviews project setup <FaGithubSquare /> */}</h2>;

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
