import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showPar, setShowPar] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("component evaluation");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowPar((prevShowPar) => !prevShowPar);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPar} />
      {/* {showPar && } */}
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
