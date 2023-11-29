import { useState } from "react";
import Aframe from "./ARFrame";

const App = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const showAframe = () => {
    setShow(true);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      {show ? (
        <Aframe name={name} />
      ) : (
        <div
          style={{
            padding: "10px",
            textAlign: "center",
          }}
        >
          <span>Ketik nama Anda: </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button style={{ marginLeft: "10px" }} onClick={() => showAframe()}>
            Show VR
          </button>
          <br />
        </div>
      )}
    </div>
  );
};

export default App;
