import React from "react";
import UseMobile from "./UseMobile";
import MobileNavItem from "./MobileNavItem";
import DesktopNavItem from "./DesktopNavItem";

import styles from "./Nav.module.css";

export default function Nav() {
  const isMobile = UseMobile();
  return (
    <nav className={styles.nav}>
      {isMobile ?  <MobileNavItem styles={styles.mobile}/> : <DesktopNavItem styles={styles.desktop}/>}
    </nav>
  );
}
