import MoonIconBtn from "./MoonIconBtn/MoonIconBtn"
import SunIconBtn from "./SunIconBtn/SunIconBtn"
import { useContext } from "react"
import { ThemeContext } from "../Provider/ThemeProvider"

// export default

export const Theme = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <>
      <div onClick={changeTheme}>
        {theme === "light" ? <SunIconBtn /> : <MoonIconBtn />}
      </div>
    </>
  )
}
