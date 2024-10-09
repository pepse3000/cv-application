import RedactorCard from "./RedactorCard";
import FormWrapper from "./FormWrapper";

function RedactorEducation({ info, setInfo }) {

  function handleInputChange(e, elId) {
    const { id, value } = e.target;
    setInfo((prevInfo) => {
      const updatedEducation = [...prevInfo.education];

      updatedEducation[elId] = {
        ...updatedEducation[elId],
        [id]: value
      }

      return {
        ...prevInfo,
        education: updatedEducation
      }
    });
  }

  function handleDelete(id) {
    setInfo((prevInfo) => {
      const updatedEducation = [...prevInfo.education.filter(el => el.id != id)];

      return {
        ...prevInfo,
        education: updatedEducation
      }
    })
  }

  function handleAddEducation() {
    setInfo((prevInfo) => ({
      ...prevInfo,
      education: [
        ...prevInfo.education,
        {
          id: crypto.randomUUID(),
          date: "2014" + " - " + "2019",
          eduName: "Place of Study" + ` ${prevInfo.education.length}`,
          description: "Business Informatics"
        }
      ]
    }))
  }

  return (
    <RedactorCard name="Education" currentTheme={info.currentTheme}>
      {info.education.map(el => {
        return (
          <FormWrapper name={el.eduName} key={el.id} onClickEvent={() => handleDelete(el.id)} currentTheme={info.currentTheme}>
            <form
              style={{ padding: "0 10px" }}>
              <label htmlFor="date">Date</label>
              <input
                placeholder="date"
                value={info.education[info.education.indexOf(el)].date}
                onChange={(e) => handleInputChange(e, info.education.indexOf(el))}
                type="text"
                id="date"
                maxLength="24"
              />
              <label htmlFor="eduName">Place of study</label>
              <input
                placeholder="place of study"
                value={info.education[info.education.indexOf(el)].eduName}
                onChange={(e) => handleInputChange(e, info.education.indexOf(el))}
                type="text"
                id="eduName"
                maxLength="32"
              />
              <label htmlFor="description">Description</label>
              <textarea
                style={{
                  height: "100px"
                }}
                placeholder="description"
                value={info.education[info.education.indexOf(el)].description}
                onChange={(e) => handleInputChange(e, info.education.indexOf(el))}
                type="text"
                id="description"
              />
            </form>
          </FormWrapper>
        )
      })}

      <button
        className="add-btn"
        onClick={handleAddEducation}
      >+</button>
    </RedactorCard>
  )
}

export default RedactorEducation;