import RedactorCard from "./RedactorCard";

function RedactorMain({ info, setInfo }) {
  function handleInputChange(e) {
    const { id, value } = e.target;
    setInfo((prevInfo) => (
      {
        ...prevInfo,
        mainInfo: {
          ...prevInfo.mainInfo,
          [id]: value
        }
      }
    ));
  }

  return (
    <RedactorCard status={true} name={"Main Info"} currentTheme={info.currentTheme}>
      <form
        style={{
          padding: "0 10px"
        }}>
        <label htmlFor="personName">Name</label>
        <input
          placeholder="Your name"
          value={info.mainInfo.personName}
          onChange={handleInputChange}
          type="text"
          id="personName"
        />
        <label htmlFor="speciality">Speciality</label>
        <input
          placeholder="Your speciality"
          value={info.mainInfo.speciality}
          onChange={handleInputChange}
          type="text"
          id="speciality"
        />
      </form>
    </ RedactorCard>
  )
}

export default RedactorMain;