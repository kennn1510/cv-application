function GeneralInformation({ name, email, phoneNumber }) {
  return (
    <>
      <h2>General Information</h2>
      <label>
        Name: <input name="name" type="text" defaultValue={name} />
      </label>
      <br />
      <label>
        Email: <input name="email" type="email" defaultValue={email} />
      </label>
      <br />
      <label>
        Phone Number:{" "}
        <input name="phoneNumber" type="tel" defaultValue={phoneNumber} />
      </label>
      <hr />
    </>
  );
}

export default GeneralInformation;
