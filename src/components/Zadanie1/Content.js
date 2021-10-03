import React, { useContext } from "react";
import PasswordContext from "./PasswordContext";
import classes from "./Content.module.css"

export default function Content() {
  const context = useContext(PasswordContext);
  return (
    <div className={classes.wrapper}>
      {context.isValid && <h1 className={classes.heading}>Welcome, you know the secret password!</h1>}
    </div>
  );
}
