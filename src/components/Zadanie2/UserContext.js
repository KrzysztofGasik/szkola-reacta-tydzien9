import React from "react";

const UserContext = React.createContext({
  email: "jan@kowalski.pl",
  isAdmin: true,
});

export default UserContext;


