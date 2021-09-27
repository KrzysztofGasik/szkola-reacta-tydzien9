import React,{useState} from "react";
import PassphraseForm from "./PassphraseForm";
import Content from "./Content";
import { contentContext } from "./Context";

export default function Wrapper() {
  const [validation,setValidation] = useState(false);
  return (
    <contentContext.Provider value={{validation,setValidation}}>
      <PassphraseForm />
      <Content />
    </contentContext.Provider>
  );
}
