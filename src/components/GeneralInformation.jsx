function GeneralInformation({ userData }) {
  return (
    <>
      <h2>General Information</h2>
      <label>
        Name: <input name="name" type="text" defaultValue={userData.name} />
      </label>
      <br />
      <label>
        Email: <input name="email" type="email" defaultValue={userData.email} />
      </label>
      <br />
      <label>
        Phone Number:{" "}
        <input
          name="phoneNumber"
          type="tel"
          defaultValue={userData.phoneNumber}
        />
      </label>
      <hr />
    </>
  );
}

export default GeneralInformation;
