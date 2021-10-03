import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./PassphraseForm.module.css";

export default function PassphraseForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const ctx = useContext(AuthContext);

  const passwordHandler = (e) => {
    const { value } = e.target;
    setError(false);
    setPassword(value);
  };
  const sendPassword = () => {
    if (password === ctx.password) {
      setPassword("");
      ctx.onValidatePassword();
    } else {
      setPassword("");
      setError(true);
    }
  };

  const errorText = (
    <p style={{ color: "#c00", fontWeight: "bold", textAlign: "center" }}>
      Wrong password
    </p>
  );

  return (
    <div className={classes.form}>
      <label htmlFor="password" className={classes.label}>
        Type your password (hint - check .env file)
      </label>
      <input
        type="password"
        name="password"
        onChange={passwordHandler}
        value={password}
        className={classes.input}
      />
      {error && errorText}
      <button onClick={sendPassword} className={classes.button}>
        Check password
      </button>
    </div>
  );
}
