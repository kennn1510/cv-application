function Display({ userData }) {
  return (
    <>
      {Object.keys(userData).map((key) => (
        <p key={key}>
          {key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}:{" "}
          {userData[key]}
        </p>
      ))}
    </>
  );
}

export default Display;
