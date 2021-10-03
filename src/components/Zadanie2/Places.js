import React from "react";
import withUser from "./withUser";

function Places({ email, isAdmin }) {
  return (
    <div>
      <p>Component: Places</p>
      <p>Welcome user - {email}</p>
      <p>You {isAdmin ? "are" : "aren't"} admin</p>
    </div>
  );
}

export default withUser(Places);
