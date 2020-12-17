import React, { useState } from "react";
import data from "./data";
function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(value);
    if (value <= 0) amount = 1;
    if (value > 8) amount = 8;
    setText(data.slice(0, amount));
  };

  return (
    <>
      {/* <h2>lorem ipsum project setup</h2>
      <label htmlFor="number">Select Number </label>
      <input
        type="number"
        id="number"
        value={value}
        name="value"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Generate</button>
      <h2>{value}</h2> */}
      <section className="section-center">
        <h3>tired of boring lorem ipsum</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
