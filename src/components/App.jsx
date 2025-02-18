import "../styles/App.css";
import GeneralInformation from "./GeneralInformation";
import Education from "./Education";
import Work from "./Work";
import Display from "./Display";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState({});

  let content;

  function handleSubmit(e) {
    e.preventDefault();
    if (!submitted) {
      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      setUserData(formJson);
      setSubmitted(!submitted);
    } else {
      setSubmitted(!submitted);
    }
  }

  if (!submitted) {
    content = (
      <>
        <h1>CV Application</h1>
        <hr />
        <form method="post" onSubmit={handleSubmit}>
          <GeneralInformation userData={userData}></GeneralInformation>
          <Education userData={userData}></Education>
          <Work userData={userData}></Work>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  } else {
    content = (
      <>
        <h1>Here is your CV!</h1>
        <hr />
        <form method="post" onSubmit={handleSubmit}>
          <Display userData={userData}></Display>
          <input type="submit" value="Edit" />
        </form>
      </>
    );
  }

  return <>{content}</>;
}

export default App;
