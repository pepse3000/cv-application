import InfoContainer from "./InfoContainer";

function Languages({ languages }) {
  return (
    <>
      <InfoContainer name={"Languages"} count={"05"} />
      {languages.map(el => {
        return (
          <div key={el.langName} className="cv-element-couple">
            <p>{el.langName}</p>
            <p>{el.level}</p>
          </div>
        )
      })}

    </>
  )
}

export default Languages;