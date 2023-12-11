import { useState } from "react";
import Answer from "./answer/Answer";
import FakeButton from "./components/FakeButton";
import LiveRegion from "./components/LiveRegion";
import Requirements from "./components/Requirements";
import "./styles.css";

let cnt = 0;

export default function App() {
  const [clickEvent, setClickEvent] = useState("This is a live region!");
  function clickHandler() {
    cnt++;
    setClickEvent(`Button clicked: ${cnt}`);
  }

  return (
    <div className="App">
      <h1>Exercise: Fake Buttons!</h1>
      <Requirements />
      <LiveRegion>{clickEvent}</LiveRegion>
      <FakeButton onClick={clickHandler}>Continue</FakeButton>
      <Answer onClick={clickHandler}>Finished</Answer>
    </div>
  );
}
