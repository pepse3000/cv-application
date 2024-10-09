import { useRef, useState } from "react";

function FormWrapper({ name, children, onClickEvent }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setOpen(!open);
  }

  return (
    <div className="form-wrapper">
      <h4>
        {name}
        <button
          className={open ? "active" : null}
          onClick={toggleCollapse}
        />
        <button className="delete"
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