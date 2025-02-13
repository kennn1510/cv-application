import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../styles/App.css";
import GeneralInformation from "./GeneralInformation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GeneralInformation></GeneralInformation>
    </>
  );
}

export default App;
