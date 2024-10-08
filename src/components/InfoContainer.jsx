function InfoContainer({ name, count }) {
  return (
    <div className="info-container">
      <h3>{name}</h3>
      <h3>{count}</h3>
    </div>
  )
}

export default InfoContainer;