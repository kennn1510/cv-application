function Work({ userData }) {
  return (
    <>
      <h2>Work Experience</h2>
      <label>
        Company Name:{" "}
        <input
          name="companyName"
          type="text"
          defaultValue={userData.companyName}
        />
      </label>
      <br />
      <label>
        Position Title:{" "}
        <input
          name="positionTitle"
          type="text"
          defaultValue={userData.positionTitle}
        />
      </label>
      <br />
      <label>
        Main Responsibility:{" "}
        <input
          name="mainResponsibility"
          type="text"
          defaultValue={userData.mainResponsibility}
        />
      </label>
      <br />
      <label>
        Date worked from:{" "}
        <input
          name="dateWorkedFrom"
          type="date"
          defaultValue={userData.dateWorkedFrom}
        />
      </label>
      <br />
      <label>
        Date worked until:{" "}
        <input
          name="dateWorkedUntil"
          type="date"
          defaultValue={userData.dateWorkedUntil}
        />
      </label>
      <br />
      <hr />
    </>
  );
}

export default Work;
