
import InfoContainer from "./InfoContainer";

function Contacts({ contactInfo, currentTheme }) {

  const theme = currentTheme === "light-theme" ? "filter-white" :
    currentTheme === "dark-theme" ? "filter-dark" :
      currentTheme === "orange-theme" ? "filter-orange" :
        currentTheme === "gray-theme" ? "filter-gray" :
          null;

  return (
    <div className="contacts">
      <img
        src={contactInfo.image}
        alt="star photo"
        className={theme}
      />

      <InfoContainer name={"Contacts"} count={"01"} />

      <ul className="list">
        <li>{contactInfo.github}</li>
        <li>{contactInfo.site}</li>
        <li>{contactInfo.mail}</li>
        <li>{contactInfo.number}</li>
      </ul>
    </div>
  )
}

export default Contacts;