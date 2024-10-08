function RedactorCard({ name, children }) {
  return (
    <div className="card">
      <h2>
        {name}
      </h2>
      {children}
    </div>
  )
}

export default RedactorCard;