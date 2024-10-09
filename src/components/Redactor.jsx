import RedactorContacts from "./RedactorContacts";

function Redactor({ info, setInfo }) {


  return (
    <div className="redactor">
      <h1>Redactor</h1>
      <RedactorContacts info={info} setInfo={setInfo} />
    </div>
  )
}

export default Redactor;