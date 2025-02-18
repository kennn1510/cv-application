import "../styles/App.css";
import GeneralInformation from "./GeneralInformation";
import Education from "./Education";
import Work from "./Work";
import Display from "./Display";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);

  let userData = {
    name: "",
    email: "",
    phoneNumber: "",
  };
  let content;

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    formData.entries().forEach((element) => {
      const [key, value] = element;
      userData[key] = value;
      console.log(userData);
    });
    setSubmitted(!submitted);
    console.log(formJson);
  }

  if (!submitted) {
    content = (
      <>
        <h1>CV Application</h1>
        <hr />
        <form method="post" onSubmit={handleSubmit}>
          {/* make an object that contains properties that can be put into these modules and props to render and also save state when going to edit and back to submit */}
          <GeneralInformation
            name={userData.name}
            email={userData.email}
            phoneNumber={userData.phoneNumber}
          ></GeneralInformation>
          <Education></Education>
          <Work></Work>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  } else {
    content = (
      <>
        <h1>Here is your CV!</h1>
        <hr />
        <Display userData={userData}></Display>
        <form method="post" onSubmit={handleSubmit}>
          <input type="submit" value="Edit" />
        </form>
      </>
    );
  }

  return <>{content}</>;
}

export default App;
