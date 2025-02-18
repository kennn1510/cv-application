function Work() {
  return (
    <>
      <h2>Work Experience</h2>
      <label>
        Company Name: <input name="companyName" type="text" />
      </label>
      <br />
      <label>
        Position Title: <input name="positionTitle" type="text" />
      </label>
      <br />
      <label>
        Main Responsibility: <input name="mainResponsibility" type="text" />
      </label>
      <br />
      <label>
        Date worked from: <input name="dateWorkedFrom" type="date" />
      </label>
      <br />
      <label>
        Date worked until: <input name="dateWorkedFrom" type="date" />
      </label>
      <br />
      <hr />
    </>
  );
}

export default Work;
