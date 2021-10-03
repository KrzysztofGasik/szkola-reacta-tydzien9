import { useState, useContext } from "react";
import PasswordContext from "./PasswordContext";

import classes from "./PassphraseForm.module.css"

export default function PassphraseForm() {
  const [password, setPassword] = useState("");
  const ctx = useContext(PasswordContext);

  const passwordHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setPassword(value);
  };
  const sendPassword = () => {
    if (password === process.env.REACT_APP_SECRET_CODE) {
      setPassword("");
      ctx.setIsValid(true);
    }
  };
  return (
    <div className={classes.form}>
      <label htmlFor="password" className={classes.label}>Type your password</label>
      <input type="password" name="password" onChange={passwordHandler} value={password} className={classes.input}/>
      <button onClick={sendPassword} className={classes.button}>Check password</button>
    </div>
  );
}
