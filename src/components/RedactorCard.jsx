import { useState, useRef } from "react";

function RedactorCard({ name, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setOpen(!open);
  }

  return (
    <div className="card">
      <h2>
        {name}
        <button
          className={open ? "active" : null}
          onClick={toggleCollapse}
        />
      </h2>
      <div
        ref={contentRef}
        style={{
          height: open ? "auto" : "0px",
          overflow: "hidden",
          transition: "height 0.3s ease-in-out"
        }}>
        {children}
      </div>
    </div >
  )
}

export default RedactorCard;