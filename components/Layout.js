import FinalNavbar from "./Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { useLayoutEffect } from "react";
const Layout = ({ children }) => {
  // useLayoutEffect(() => {
  //   console.log("hello");
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
  // }, []);
  return (
    <>
      <FinalNavbar />
      {children}
    </>
  );
};

export default Layout;
