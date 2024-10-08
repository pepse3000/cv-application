import InfoContainer from "./InfoContainer";

function Skills({ skills }) {
  return (
    <>
      <InfoContainer name={"Skills"} count={"04"} />

      {skills.map(el => {
        return (
          <div key={el.skillName} className="cv-element-couple">
            <p>{el.skillName}</p>
            <p>{el.level}</p>
          </div>
        )
      })}

    </>
  )
}

export default Skills;