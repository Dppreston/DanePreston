import { useRef } from "react";

function ProjectTile(props) {
  const tiles = props.tileContent;

  const handleClick = (e) => {
    window.open(e.currentTarget.value);
  };
  return (
    <>
      {tiles.map((tile) => (
        <div className="tile" key={tile.id}>
          <div className="tile-img-cont">
            <img
              src={tile.img}
              alt="project-tile"
              className="tileimg"
              id="tileimg"
            />
          </div>
          <div className="tile-support-cont">
            <p className="p">{tile.support}</p>
            <div className="tile-link-cont">
              <button
                className="btn"
                id="git"
                value={tile.git}
                onClick={handleClick}
              >
                <i className="fa-brands fa-github"></i>
              </button>
              <button
                className="btn"
                id="site"
                value={tile.site}
                onClick={handleClick}
              >
                Project Site
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default ProjectTile;
