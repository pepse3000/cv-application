import RedactorContacts from "./RedactorContacts";
import RedactorExperience from "./RedactorExperience";
import RedactorEducation from "./RedactorEducation";
import RedactorSkills from "./RedactorSkills";
import RedactorLanguages from "./RedactorLanguages";
import RedactorMain from "./RedactorMain";

function Redactor({ info, setInfo }) {


  return (
    <div className="redactor">
      <h1>Redactor</h1>
      <RedactorMain info={info} setInfo={setInfo} />
      <RedactorContacts info={info} setInfo={setInfo} />
      <RedactorExperience info={info} setInfo={setInfo} />
      <RedactorEducation info={info} setInfo={setInfo} />
      <RedactorSkills info={info} setInfo={setInfo} />
      <RedactorLanguages info={info} setInfo={setInfo} />
    </div>
  )
}

export default Redactor;