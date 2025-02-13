import "../styles/App.css";
import GeneralInformation from "./GeneralInformation";
import Education from "./Education";
import Work from "./Work";

function App() {
  return (
    <>
      <h1>CV Application</h1>
      <hr />
      <form action="">
        <GeneralInformation></GeneralInformation>
        <Education></Education>
        <Work></Work>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
