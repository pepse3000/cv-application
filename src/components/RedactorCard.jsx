import { useState, useRef } from "react";

function RedactorCard({ name, children, status, currentTheme }) {
  const [open, setOpen] = useState(status ? true : false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setOpen(!open);
  }

  const theme = currentTheme === "light-theme" ? "filter-white" :
    currentTheme === "dark-theme" ? "filter-dark" :
      currentTheme === "orange-theme" ? "filter-orange" :
        currentTheme === "gray-theme" ? "filter-gray" :
          null;

  return (
    <div className="card">
      <h2>
        {name}
        <button
          className={open ? "active " + theme : theme}
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