import React from "react";
import { FaHome, FaRegFolder, FaPhone } from "react-icons/fa";

export default function MobileNavItem({styles}) {
  return (
    <ul className={styles}>
      <li>
        <FaHome />
      </li>
      <li>
        <FaRegFolder />
      </li>
      <li>
        <FaPhone />
      </li>
    </ul>
  );
}
