import React from "react";
import UseMobile from "./UseMobile";
import MobileNavItem from "./MobileNavItem";
import DesktopNavItem from "./DesktopNavItem";

import styles from "./Nav.module.css";

export default function Nav() {
  const windowWidth = UseMobile();
  const isMobile = windowWidth < 1024 ? true : false;
  return (
    <nav className={styles.nav}>
      <p>Current window width {windowWidth}px</p>
      {isMobile ? (
        <MobileNavItem styles={styles.mobile} />
      ) : (
        <DesktopNavItem styles={styles.desktop} />
      )}
    </nav>
  );
}
