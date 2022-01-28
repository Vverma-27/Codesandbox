import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import HIW from "../components/HIW";
import HomeBanner from "../components/HomeBanner";
export default function Home() {
  return (
    <>
      <HomeBanner />
      <HIW />
      <Contact />
    </>
  );
}
