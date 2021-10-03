import React,{useContext} from "react";

import AuthContext from "../../store/auth-context";
import classes from "./Content.module.css"

export default function Content() {
  const ctx = useContext(AuthContext)
  return (
    <div className={classes.wrapper}>
      {ctx.isPasswordValid && <h1 className={classes.heading}>Welcome, you know the secret password!</h1>}
    </div>
  );
}
