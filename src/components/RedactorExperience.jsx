import RedactorCard from "./RedactorCard";
import FormWrapper from "./FormWrapper";

function RedactorExperience({ info, setInfo }) {

  function handleInputChange(e, elId) {
    const { id, value } = e.target;
    setInfo((prevInfo) => {
      const updatedExperience = [...prevInfo.experience];

      updatedExperience[elId] = {
        ...updatedExperience[elId],
        [id]: value
      }

      return {
        ...prevInfo,
        experience: updatedExperience
      }
    });
  }

  function handleDelete(id) {
    setInfo((prevInfo) => {
      const updatedExperience = [...prevInfo.experience.filter(el => el.id != id)];

      return {
        ...prevInfo,
        experience: updatedExperience
      }
    })
  }

  function handleAddExperience() {
    setInfo((prevInfo) => ({
      ...prevInfo,
      experience: [
        ...prevInfo.experience,
        {
          id: crypto.randomUUID(),
          date: "Date - Date",
          companyName: "Company Name" + ` ${prevInfo.experience.length}`,
          description: "Description"
        }
      ]
    }))
  }

  return (
    <RedactorCard name="Experience">
      {info.experience.map(el => {
        return (
          <FormWrapper name={el.companyName} key={el.id} onClickEvent={() => handleDelete(el.id)}>
            <form>
              <label htmlFor="date">Date</label>
              <input
                placeholder="date"
                value={info.experience[info.experience.indexOf(el)].date}
                onChange={(e) => handleInputChange(e, info.experience.indexOf(el))}
                type="text"
                id="date"
                maxLength="24"
              />
              <label htmlFor="companyName">Company Name</label>
              <input
                placeholder="company name"
                value={info.experience[info.experience.indexOf(el)].companyName}
                onChange={(e) => handleInputChange(e, info.experience.indexOf(el))}
                type="text"
                id="companyName"
                maxLength="32"
              />
              <label htmlFor="description">Description</label>
              <textarea
                style={{
                  height: "100px"
                }}
                placeholder="description"
                value={info.experience[info.experience.indexOf(el)].description}
                onChange={(e) => handleInputChange(e, info.experience.indexOf(el))}
                type="text"
                id="description"
              />
            </form>
          </FormWrapper>
        )
      })}

      <button
        className="add-btn"
        onClick={handleAddExperience}
      >+</button>
    </RedactorCard>
  )
}

export default RedactorExperience;