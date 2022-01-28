import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [isNavActive, setNavActive] = useState(false);
  useEffect(() => {
    const body = document.querySelector("#__next");
    const handleScroll = () => {
      return setNavActive(window.scrollY >= 100 ? true : false);
    };
    // handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={isNavActive ? "nav-active" : ""}>
      <ul className={isActive ? "active" : ""}>
        <div className="navbar_links">
          {/* <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li> */}

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
        </div>
        <img
          className="navbar_logo"
          src="/atrox-logo.png"
          width="135"
          height="33.92"
        />
        <div className="navbar_links">
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Partners</a>
          </li>
          <li>
            <a className="primaryButton">Login</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
