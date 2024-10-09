import RedactorCard from "./RedactorCard";
import FormWrapper from "./FormWrapper";

function RedactorLanguages({ info, setInfo }) {

  function handleInputChange(e, elId) {
    const { id, value } = e.target;
    setInfo((prevInfo) => {
      const updatedLanguages = [...prevInfo.languages];

      updatedLanguages[elId] = {
        ...updatedLanguages[elId],
        [id]: value
      }

      return {
        ...prevInfo,
        languages: updatedLanguages
      }
    });
  }

  function handleDelete(id) {
    setInfo((prevInfo) => {
      const updatedLanguages = [...prevInfo.languages.filter(el => el.id != id)];

      return {
        ...prevInfo,
        languages: updatedLanguages
      }
    })
  }

  function handleAddLang() {
    setInfo((prevInfo) => ({
      ...prevInfo,
      languages: [
        ...prevInfo.languages,
        {
          id: crypto.randomUUID(),
          langName: "Language" + ` ${prevInfo.languages.length}`,
          level: 0
        }
      ]
    }))
  }

  return (
    <RedactorCard name="Languages" currentTheme={info.currentTheme}>
      {info.languages.map(el => {
        return (
          <FormWrapper name={el.langName} key={el.id} onClickEvent={() => handleDelete(el.id)} currentTheme={info.currentTheme}>
            <form>
              <label htmlFor="langName">Language Name</label>
              <input
                placeholder="langName"
                value={info.languages[info.languages.indexOf(el)].langName}
                onChange={(e) => handleInputChange(e, info.languages.indexOf(el))}
                type="text"
                id="langName"
                maxLength="24"
              />
              <label htmlFor="level">Level</label>
              <input
                placeholder="language level"
                value={info.languages[info.languages.indexOf(el)].level}
                onChange={(e) => handleInputChange(e, info.languages.indexOf(el))}
                type="text"
                id="level"
                maxLength="6"
              />
            </form>
          </FormWrapper>
        )
      })}

      <button
        className="add-btn"
        onClick={handleAddLang}
      >+</button>
    </RedactorCard>
  )
}

export default RedactorLanguages;