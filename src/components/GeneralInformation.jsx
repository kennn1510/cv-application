// import { useState } from "react";

function GeneralInformation() {
  return (
    <>
      <h2>General Information</h2>
      <label>
        Name: <input name="name" type="text" />
      </label>
      <br />
      <label>
        Email: <input name="email" type="email" />
      </label>
      <br />
      <label>
        Phone Number: <input name="phoneNumber" type="tel" />
      </label>
      <hr />
    </>
  );
}

export default GeneralInformation;
