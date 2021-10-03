import React, { useState } from "react";

const AuthContext = React.createContext({
  isPasswordValid: false,
  onValidatePassword: () => {},
  password: "zupa123",
});

export const AuthContextProvider = (props) => {
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const onValidatePasswordHandler = () => {
    setIsPasswordValid(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isPasswordValid: isPasswordValid,
        onValidatePassword: onValidatePasswordHandler,
        password: "zupa123",
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
