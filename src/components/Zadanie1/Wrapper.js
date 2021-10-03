import React from "react";
import PassphraseForm from "./PassphraseForm";
import Content from "./Content";

export default function Wrapper() {
  return (
    <React.Fragment>
      <PassphraseForm />
      <Content />
    </React.Fragment>
  );
}
