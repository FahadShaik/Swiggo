import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState("C2");
  return (
    <div className="user-card">
      <h3>Count : {count}</h3>
      <h3>Count2 : {count2}</h3>
      <h1>Name: {name}</h1>
      <h3>Designation: Developer</h3>
      <h3>Location: Bangalore</h3>
      <h3>Linkedin:</h3>
    </div>
  );
};

export default User;
