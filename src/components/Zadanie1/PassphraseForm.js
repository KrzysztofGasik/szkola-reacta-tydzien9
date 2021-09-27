import { useState } from "react";
import Content from "./Content";

export default function PassphraseForm() {
  const [password, setPassword] = useState("");
  const [wasClicked, setWasClicked] = useState(false);

  const passwordHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setPassword(value);
  };
  const sendPassword = () => {
    setWasClicked(!wasClicked);
  };
  return (
    <div>
      <input type="password" onChange={passwordHandler} value={password} />
      <button onClick={sendPassword}>Check password</button>
      <Content passwordFromUser={password} clicked={wasClicked} />
    </div>
  );
}
