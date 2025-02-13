import Image from "next/image";
import Navbar from "./Components/Navbar";
import Head from "./Components/Head";
import About from "./Components/About";
import Project from "./Components/Project";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Head />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

