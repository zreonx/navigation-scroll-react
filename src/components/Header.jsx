import { useContext, useEffect, useState } from "react";
import styles from "../styles/Header.module.scss";
import { NavContext } from "../context/NavContext";
const Header = () => {
  const { activeLinkId } = useContext(NavContext);
  const navLinks = ["Home", "Profile", "Portfolio", "About", "Contact"];

  const handleClickLogo = () => {
    document
      .getElementById("homeSection")
      .scrollIntoView({ behavior: "smooth" });
  };
  const renderNavLink = (link) => {
    const scrollToId = `${link.toLowerCase()}Section`;

    const handleClickLink = () => {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: "smooth" });
    };

    return (
      <li key={link}>
        <button
          className={activeLinkId === link ? styles.active : ""}
          onClick={handleClickLink}
        >
          {link}
        </button>
      </li>
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <h1 onClick={handleClickLogo}>{`{ Zreon }`}</h1>
          <ul className={styles.navBarLinks}>
            {navLinks.map((link) => renderNavLink(link))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
