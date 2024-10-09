import RedactorCard from "./RedactorCard";
import FormWrapper from "./FormWrapper";

function RedactorSkills({ info, setInfo }) {

  function handleInputChange(e, elId) {
    const { id, value } = e.target;
    setInfo((prevInfo) => {
      const updatedSkills = [...prevInfo.skills];

      updatedSkills[elId] = {
        ...updatedSkills[elId],
        [id]: value
      }

      return {
        ...prevInfo,
        skills: updatedSkills
      }
    });
  }

  function handleDelete(id) {
    setInfo((prevInfo) => {
      const updatedSkills = [...prevInfo.skills.filter(el => el.id != id)];

      return {
        ...prevInfo,
        skills: updatedSkills
      }
    })
  }

  function handleAddSkills() {
    setInfo((prevInfo) => ({
      ...prevInfo,
      skills: [
        ...prevInfo.skills,
        {
          id: crypto.randomUUID(),
          skillName: "Skill Name" + ` ${prevInfo.skills.length}`,
          level: 0
        }
      ]
    }))
  }

  return (
    <RedactorCard name="Skills">
      {info.skills.map(el => {
        return (
          <FormWrapper name={el.skillName} key={el.id} onClickEvent={() => handleDelete(el.id)}>
            <form>
              <label htmlFor="skillName">Skill Name</label>
              <input
                placeholder="skillName"
                value={info.skills[info.skills.indexOf(el)].skillName}
                onChange={(e) => handleInputChange(e, info.skills.indexOf(el))}
                type="text"
                id="skillName"
                maxLength="24"
              />
              <label htmlFor="level">Level</label>
              <input
                placeholder="skill level"
                value={info.skills[info.skills.indexOf(el)].level}
                onChange={(e) => handleInputChange(e, info.skills.indexOf(el))}
                type="number"
                id="level"
                maxLength="1"
                max="5"
                min="0"
              />
            </form>
          </FormWrapper>
        )
      })}

      <button
        className="add-btn"
        onClick={handleAddSkills}
      >+</button>
    </RedactorCard>
  )
}

export default RedactorSkills;