function Skills(props) {
  const skills = props.skillContent;

  return (
    <>
      {skills.map((skill) => (
        <div className="skill" key={skill.id}>
          <div className="skill-icon-wrapper">
            <i className={skill.icon}></i>
          </div>
          <div className="skill-title-cont">
            <h2 className="h2">{skill.skill}</h2>
            <p className="p">{skill.support}</p>
          </div>
          <div className="skill-lang-cont">
            <h3 className="h3">{skill.langTitle}</h3>
            <p className="p">{skill.lang}</p>
          </div>
          <div className="skill-tool-cont">
            <h3 className="h3">{skill.toolTitle}</h3>
            <ul>
              {skill.tools.map((tools) => (
                <li key={tools}>{tools}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
export default Skills;
