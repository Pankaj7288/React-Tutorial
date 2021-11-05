import React from "react";
import ClockS from "./Components/ClockS";
import Rcc from "./Components/Rcc";
import Rfc from "./Components/Rfc";

export default function App() {
  const loopArray = [1,2,3];
  return (
    <div>
      <Rfc myName="Pankaj" />
      <Rcc spouseName="Satu Samonty" />
      <ClockS loopArray ={loopArray}/>
    </div>
  );
}
