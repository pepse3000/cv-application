import InfoContainer from "./InfoContainer";

function Education({ eduInfo }) {
  return (
    <>
      <InfoContainer name={"Education"} count={"03"} />

      {eduInfo.map(el => {
        return (
          <div key={el.eduName} className="cv-element">
            <h4>{el.date}</h4>
            <h2>{el.eduName}</h2>
            <p>{el.description}</p>
          </div>
        )
      })}

    </>
  )
}

export default Education;