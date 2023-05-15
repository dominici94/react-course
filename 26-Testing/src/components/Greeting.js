import { useState } from "react";

import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {/* <p>It's good to see you!</p> */}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
