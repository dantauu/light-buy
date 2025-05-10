import sunIcon from "../../../public/assets/img/sun.svg"
import "../Theme.scss"

const SunIconBtn = () => {
  return (
    <button className="sun-btn">
      <img className="sun-btn__img" src={sunIcon} />
    </button>
  )
}
export default SunIconBtn
