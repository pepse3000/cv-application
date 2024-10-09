import RedactorCard from "./RedactorCard"

function RedactorContacts({ info, setInfo }) {
  function handleInputChange(e) {
    const { id, value } = e.target;
    setInfo((prevInfo) => (
      {
        ...prevInfo,
        contacts: {
          ...prevInfo.contacts,
          [id]: value
        }
      }
    ));
  }

  return (
    <RedactorCard status={true} name={"Contacts"} currentTheme={info.currentTheme}>
      <form
        style={{
          padding: "0 10px"
        }}>
        <label htmlFor="github">Github</label>
        <input
          placeholder="github"
          value={info.contacts.github}
          onChange={handleInputChange}
          type="text"
          id="github"
        />
        <label htmlFor="site">Site</label>
        <input
          placeholder="site"
          value={info.contacts.site}
          onChange={handleInputChange}
          type="text"
          id="site"
        />
        <label htmlFor="mail">E-mail</label>
        <input
          placeholder="e-mail"
          value={info.contacts.mail}
          onChange={handleInputChange}
          type="email"
          id="mail"
        />
        <label htmlFor="number">Number</label>
        <input
          placeholder="number"
          value={info.contacts.number}
          onChange={handleInputChange}
          type="tel"
          id="number"
        />
      </form>
    </RedactorCard>
  )
}

export default RedactorContacts;