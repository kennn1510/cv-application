function Education({ userData }) {
  return (
    <>
      <h2>Educational Experience</h2>
      <label>
        School Name:{" "}
        <input
          name="schoolName"
          type="text"
          defaultValue={userData.schoolName}
        />
      </label>
      <br />
      <label>
        Title of Study:{" "}
        <input
          name="titleOfStudy"
          type="text"
          defaultValue={userData.titleOfStudy}
        />
      </label>
      <br />
      <label>
        Date of Study:{" "}
        <input
          name="dateOfStudy"
          type="date"
          defaultValue={userData.dateOfStudy}
        />
      </label>
      <br />
      <hr />
    </>
  );
}

export default Education;
