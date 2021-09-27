import { useContext } from "react";
import { contentContext } from "./Context";

export default function Content() {
  const {validation} = useContext(contentContext)
  return (
    <div>
      {validation && <h1>Welcome, you know the secret password!</h1>}
    </div>
  )
}
