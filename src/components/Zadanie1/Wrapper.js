import React from "react";
import PassphraseForm from "./PassphraseForm";
import { contentContext } from "./Context";

export default function Wrapper() {
  return (
    <contentContext.Provider value="zupa1">
      <PassphraseForm />
    </contentContext.Provider>
  );
}
