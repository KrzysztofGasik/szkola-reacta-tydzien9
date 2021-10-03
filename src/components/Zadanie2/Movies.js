import React from "react";
import withUser from "./withUser";

function Movies({email,isAdmin}) {
  return (
    <div>
      <p>Component: Movies</p>
      <p>Welcome user - {email}</p>
      <p>You {isAdmin ? "are" : "aren't"} admin</p>
    </div>
  );
}

export default withUser(Movies);
