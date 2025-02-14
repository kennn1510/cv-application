import "../styles/App.css";
import GeneralInformation from "./GeneralInformation";
import Education from "./Education";
import Work from "./Work";

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <>
      <h1>CV Application</h1>
      <hr />
      <form method="post" onSubmit={handleSubmit}>
        <GeneralInformation></GeneralInformation>
        <Education></Education>
        <Work></Work>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
