import { useRef, useState } from "react";

function FormWrapper({ name, children, onClickEvent, currentTheme }) {
  const [open, setOpen] = useState(false);
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
    <div className="form-wrapper">
      <h4>
        {name}
        <button
          className={open ? "active " + theme : theme}
          onClick={toggleCollapse}
        />
        <button className={"delete " + theme}
          onClick={onClickEvent} />
      </h4>
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? `${contentRef.current.scrollHeight + 2}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out"
        }}>
        {children}
      </div>
    </div >
  )
}

export default FormWrapper;