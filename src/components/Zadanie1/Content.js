import { useContext } from "react";
import { contentContext } from "./Context";

export default function Content({passwordFromUser,clicked}) {
  const password = useContext(contentContext);
  const isValid = passwordFromUser === password ? true : false;
  return (
    isValid && clicked && <h1>Welcome, you know the secret password!</h1>
  )
}
