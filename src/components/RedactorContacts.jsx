import RedactorCard from "./RedactorCard"

function RedactorContacts() {
  return (
    <RedactorCard name={"Contacts"}>
      <form>
        <label htmlFor="name">Name</label>
        <input placeholder="name" type="text" id="name" />
      </form>
    </RedactorCard>
  )
}

export default RedactorContacts;