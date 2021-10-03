import {useState,useEffect} from "react";

export default function UseMobile() {
  const [windowWidth, setWindowParams] = useState(window.innerWidth);

  useEffect(() => {
    function updateWindowParams() {
      setWindowParams(window.innerWidth);
    }
    window.addEventListener("resize", updateWindowParams);

    return () => {
      window.removeEventListener("resize", updateWindowParams);
    };
  }, [windowWidth]);

  return windowWidth;
}
