import "./App.css";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";
import { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return document.removeEventListener("resize", handleWindowSizeChange);
  });

  return <div className="App">{width <= 1000 ? <Mobile /> : <Desktop />}</div>;
}

export default App;
