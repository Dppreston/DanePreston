import { useRef } from "react";
import About from "../components/About";
import Arrow from "../components/Arrow";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Nav from "../navbar/Nav";
import Footer from "../components/Footer";
import "../styles/home.css";
import Contact from "../components/Contact";

const intro = [
  {
    id: 1,
    header: "frontend & full-stack developer",
    support: "I have a newfound passion for developing amazing web apps",
  },
];

const bioContent = [
  {
    id: 1,
    header: `Hi, I'm Dane. Thanks for checking out my site.`,
    support: `I started my development journey a year ago in hopes of finding a
  career that I was passionate about. Throughout this experience, I
  have learned a lot about myself and what drives me to be successful.
  Although this is just the beginning of my path, I am confident in my
  abilities, and what I can bring to an organization and a team.`,
  },
];

function Home() {
  return (
    <>
      <Nav />
      <Intro intro={intro} />
      <Arrow />
      <About bio={bioContent} />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;
