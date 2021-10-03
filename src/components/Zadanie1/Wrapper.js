import React, { useState } from "react";
import PassphraseForm from "./PassphraseForm";
import Content from "./Content";
import PasswordContext from "./PasswordContext";

export default function Wrapper() {
  const [isValid,setIsValid] = useState(false)
  return (
    <PasswordContext.Provider
      value={{isValid,setIsValid}}
    >
      <PassphraseForm />
      <Content />
    </PasswordContext.Provider>
  );
}
