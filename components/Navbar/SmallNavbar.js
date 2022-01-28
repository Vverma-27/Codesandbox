import Link from "next/link";
import { useState, useEffect } from "react";
const SmallNavbar = () => {
  const [isActive, setActive] = useState(false);
  const [isNavActive, setNavActive] = useState(false);
  useEffect(() => {
    const body = document.querySelector("#__next");
    const handleScroll = () => {
      console.log(window.scrollY);
      return setNavActive(window.scrollY >= 100 ? true : false);
    };
    // handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={isNavActive ? "sm-navbar nav-active" : "sm-navbar"}>
      <div className="sm-navbar_logo-container">
        <img
          className="sm-navbar_logo"
          src="/atrox-logo.png"
          alt="Atrox Logo"
        />
      </div>
      <ul className={isActive ? "active" : ""}>
        <Link href="/">
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link href="/about">
          <li>
            <a>About Us</a>
          </li>
        </Link>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Partners</a>
        </li>
        <li>
          <a className="primaryButton">Log In</a>
        </li>
      </ul>
      <div
        className={`navbar_hamburger ${isActive ? "active" : ""}`}
        onClick={() => setActive(!isActive)}
      >
        <svg
          className="burger"
          version="1.1"
          height="100"
          width="100"
          viewBox="0 0 100 100"
        >
          <path className="line line1" d="M 50,35 H 30" />
          <path className="line line2" d="M 50,35 H 70" />
          <path className="line line3" d="M 50,50 H 30" />
          <path className="line line4" d="M 50,50 H 70" />
          <path className="line line5" d="M 50,65 H 30" />
          <path className="line line6" d="M 50,65 H 70" />
        </svg>
        <svg
          className="x"
          version="1.1"
          height="100"
          width="100"
          viewBox="0 0 100 100"
        >
          <path className="line" d="M 34,32 L 66,68" />
          <path className="line" d="M 66,32 L 34,68" />
        </svg>
      </div>
    </nav>
  );
};

export default SmallNavbar;
