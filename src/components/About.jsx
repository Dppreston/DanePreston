import Skills from "./Skills";

const skillContent = [
  {
    id: 1,
    skill: "frontend development",
    support: "I love bringing my ideas to life in the browser",
    langTitle: "coding languages & libraries",
    lang: "HTML, CSS, JavaScript, ReactJS, TypeScript",
    toolTitle: "tools i use",
    tools: ["Github", "VSCode", "Railway.app"],
    icon: "fa-solid fa-code skill-i",
  },
  {
    id: 2,
    skill: "backend development",
    support: "I'm getting my feet wet with backend architecture",
    langTitle: "methods i enjoy",
    lang: "Databases, data management & API communication",
    toolTitle: "skills developed",
    tools: ["Custom API's", "MongoDB", "Firebase"],
    icon: "fa-solid fa-layer-group skill-i",
  },
  {
    id: 3,
    skill: "my goals",
    support: "My aspirations as a developer and software engineer",
    langTitle: "language goals",
    lang: "Java, Python, C#, Swift",
    toolTitle: "I'm interesting in creating...",
    tools: ["IOS Applications", "Machine Learning"],
    icon: "fa-solid fa-check skill-i",
  },
];

function About(props) {
  const [{ header, support }] = props.bio;
  return (
    <>
      <div className="about-wrapper">
        <div className="about-bio" name="about-scroll">
          <h2 className="h2">{header}</h2>
          <p className="p">{support}</p>
        </div>
        <div className="skills-cont">
          <Skills skillContent={skillContent} />
        </div>
      </div>
    </>
  );
}
export default About;
