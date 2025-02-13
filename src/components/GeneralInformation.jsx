// import { useState } from "react";

function GeneralInformation() {
  return (
    <>
      <h2>General Information</h2>
      <label>
        Name: <input type="text" />
      </label>
      <br />
      <label>
        Email: <input type="email" />
      </label>
      <br />
      <label>
        Phone Number: <input type="tel" />
      </label>
      <hr />
    </>
  );
}

export default GeneralInformation;
