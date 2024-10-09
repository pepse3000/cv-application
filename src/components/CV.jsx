import Contacts from "./Contacts";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Languages from "./Languages";

function CVMain({ info }) {
  return (
    <div className="main-cv">
      <section>
        <Contacts contactInfo={info.contacts} currentTheme={info.currentTheme} />
      </section>
      <section>
        <h1
          className={info.currentTheme == "gray-theme" ? "transparent" : "null"}
        >{info.mainInfo.personName}, {info.mainInfo.speciality}</h1>
        <div className="separate-info">
          <div className="left-column">
            <Experience expInfo={info.experience} />
            <Education eduInfo={info.education} />
          </div>
          <div className="right-column">
            <Skills skills={info.skills} />
            <Languages languages={info.languages} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default CVMain;