import InfoContainer from "./InfoContainer";

function Experience({ expInfo }) {

  return (
    <>
      <InfoContainer name={"Experience"} count={"02"} />

      {expInfo.map(el => {
        return (
          <div key={el.companyName} className="cv-element">
            <h4>{el.date}</h4>
            <h2>{el.companyName}</h2>
            <p>{el.description}</p>
          </div>
        )
      })}


    </>

  )
}

export default Experience;