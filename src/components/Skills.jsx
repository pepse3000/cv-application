import InfoContainer from "./InfoContainer";

function Skills({ skills }) {
  return (
    <>
      <InfoContainer name={"Skills"} count={"04"} />

      {skills.map(el => {
        const level = el.level;

        const createDivs = () => {
          const divs = []
          for (let i = 0; i < 5; i++) {
            if (i < level) divs.push(<div key={i} className="level-info full"></div>);
            if (i > level || i == level) divs.push(<div key={i} className="level-info empty"></div>);
          }
          return divs;
        }

        const levelDivs = createDivs();

        return (
          <div key={el.skillName} className="cv-element-couple">
            <p>{el.skillName}</p>
            <div className="skill-level">
              {levelDivs}
            </div>
          </div>
        )
      })}

    </>
  )
}

export default Skills;