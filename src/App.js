import React from "react";
import Rcc from "./Components/Rcc";
import Rfc from "./Components/Rfc";
import Clock from "./Components/Clock";

export default function App() {
  return (
    <div>
      <Rfc myName="Pankaj" />
      <Rcc spouseName="Satu Samonty" />
      <Clock />
    </div>
  );
}
