import react from "react";
import { useState } from "react";
export default function Bmicalc() {
  const [height, setHeight] = useState();
  const [weight, setweight] = useState();
  //const [bmi, setBmi] = useState();

  // function calcbmi(ht, wt) {
  //   bmif = wt / (ht * ht);
  //   setBmi(bmif);
  // }
  return (
    <div className="bmi">
      <h1>BMI calculator</h1>
      <div className="Height">
        <span> Height:</span>
        <input
          type="number"
          onChange={(e) => setHeight(e.target.value)}
          value={height}
        />
      </div>
      <div className="Weight">
        <span>Weight:</span>
        <input
          type="number"
          onChange={(e) => setweight(e.target.value)}
          value={weight}
        />
      </div>

      {/* <button
        onClick={
          (calcbmi = (height, weight) =>
            setBmi(parseInt(weight) / parseInt(height * height)))
        }
        className="calc"
      >
        Calculate
      </button> */}

      <Calcfinal ht={height} wt={weight} />
    </div>
  );
}
function Calcfinal({ ht, wt }) {
  const [bmi, setBmi] = useState();
  function calcbmi() {
    setBmi((wt / (ht * ht)).toFixed(2));
  }
  return (
    <div>
      <button onClick={calcbmi}>calculate</button>
      <h3>{bmi}</h3>
    </div>
  );
}
