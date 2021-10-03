import { createContext } from "react";

const PasswordContext = createContext({
  isValidPassword: false
});

export default PasswordContext;
