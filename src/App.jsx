import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Slider />
    </>
  );
}

export default App;
