import ProjectTile from "./ProjectTile";
import mwTile from "../assets/mwvlogo.png";
import pawpalTile from "../assets/pawpalslogo.png";

const tileContent = [
  {
    id: 1,
    img: pawpalTile,
    support: "A simple dog friend finder application",
    site: "https://dppreston.github.io/PawPals/",
    git: "https://github.com/Dppreston/PawPals.git",
  },
  {
    id: 2,
    img: mwTile,
    support: "construction representation and development",
    site: "https://mwvanderveen.onrender.com",
    git: "https://github.com/Dppreston/MW.git",
  },
];

function Projects() {
  return (
    <>
      <div className="projects-wrapper">
        <div className="project-title-cont">
          <h2 className="h2">check out my projects</h2>
          <p className="p">
            Make sure to check back because more projects are always being
            added.
          </p>
        </div>
        <div className="project-content-cont">
          <ProjectTile tileContent={tileContent} />
        </div>
      </div>
    </>
  );
}
export default Projects;
