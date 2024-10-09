
import InfoContainer from "./InfoContainer";

function Contacts({ contactInfo }) {

  return (
    <div className="contacts">
      <img
        src={contactInfo.image}
        alt="star photo"
        style={{ filter: "invert(1)" }}
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