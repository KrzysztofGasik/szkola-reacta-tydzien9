import { useState, useContext } from "react";
import { contentContext } from "./Context";

export default function PassphraseForm() {
  const [password, setPassword] = useState("");
  const { validation, setValidation } = useContext(contentContext);

  const passwordHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setPassword(value);
  };
  const sendPassword = () => {
    if (password === process.env.REACT_APP_SECRET_CODE) {
      setPassword("");
      setValidation(!validation);
    }
  };
  return (
    <div>
      <input type="password" onChange={passwordHandler} value={password} />
      <button onClick={sendPassword}>Check password</button>
    </div>
  );
}
