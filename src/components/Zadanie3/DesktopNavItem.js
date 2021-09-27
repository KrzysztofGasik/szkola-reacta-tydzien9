import React from "react";
import { FaHome, FaRegFolder, FaPhone } from "react-icons/fa";

export default function DesktopNavItem({ styles }) {
  return (
    <ul className={styles}>
      <li>
        <FaHome />
        <p>Home</p>
      </li>
      <li>
        <FaRegFolder />
        <p>About</p>
      </li>
      <li>
        <FaPhone />
        <p>Contact</p>
      </li>
    </ul>
  );
}
