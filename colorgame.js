import react from "react";
import { useState } from "react";

export default function Colorgame() {
  const [box, setBox] = useState("red");
  const [colorList, setcolorList] = useState([]);

  const style1 = {
    backgroundColor: box,
  };
  return (
    <div>
      <input
        onChange={(event) => setBox(event.target.value)}
        type="text"
        style={style1}
        placeholder="Enter a color"
        value={box}
      />
      <button onClick={() => setcolorList([...colorList, box])}>Add</button>
      {colorList.map((clr) => (
        <Colorbox box={clr} />
      ))}
    </div>
  );
}
function Colorbox({ box }) {
  const style2 = {
    height: "35px",
    width: "300px",
    marginTop: "10px",
    backgroundColor: box,
  };
  return <div style={style2}></div>;
}
