import Navbar from "./Navbar";
import SmallNavbar from "./SmallNavbar";
import { useState, useEffect } from "react";
const FinalNavbar = () => {
  //   const [isDesktop, setIsDesktop] = useState(
  //     window.innerWidth > 768 ? true : false
  //   );
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    console.log("Fired");
    const handleWindowResize = () => setIsDesktop(window.innerWidth > 768);
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return isDesktop ? <Navbar /> : <SmallNavbar />;
};

export default FinalNavbar;
