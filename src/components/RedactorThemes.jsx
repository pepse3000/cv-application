import RedactorCard from "./RedactorCard";
import ball from "../assets/ball.svg";
import flower from "../assets/flower.svg";
import star from "../assets/star.svg";

function RedactorVisuals({ info, setInfo }) {
  function handleThemeChange(theme) {
    document.body.className = theme;

    setInfo((prevInfo) => (
      {
        ...prevInfo,
        currentTheme: theme
      }
    ));
  }

  function handleSvgChange(svg) {
    setInfo((prevInfo) => (
      {
        ...prevInfo,
        contacts: {
          ...prevInfo.contacts,
          image: svg
        }
      }
    ))
  }

  return (
    <RedactorCard status={true} name={"Visuals"} currentTheme={info.currentTheme}>
      <div
        style={{
          padding: "0 10px"
        }}
        className="theme-btns"
      >
        <p>Themes</p>
        <button
          onClick={() => handleThemeChange("light-theme")}
          className="light"
        />
        <button
          onClick={() => handleThemeChange("dark-theme")}
          className="dark"
        />
        <button
          onClick={() => handleThemeChange("orange-theme")}
          className="orange"
        />
        <button
          onClick={() => handleThemeChange("gray-theme")}
          className="gray"
        />
      </div>
      <div
        style={{
          padding: "0 10px"
        }}
        className="svg-btns"
      >
        <p>CV Image</p>
        <button
          onClick={() => handleSvgChange(ball)}
          className="svg-handler"
        />
        <button
          onClick={() => handleSvgChange(flower)}
          className="svg-handler"
        />
        <button
          onClick={() => handleSvgChange(star)}
          className="svg-handler"
        />
      </div>
    </ RedactorCard>
  )
}

export default RedactorVisuals;