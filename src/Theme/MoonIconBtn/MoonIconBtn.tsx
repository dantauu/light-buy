import moonIcon from '../../assets/img/moon.svg'
import '../Theme.scss'

const MoonIconBtn = () => {
    return (
			<button className='moon-btn'>
				<img className='moon-btn__img' src={moonIcon} />
			</button>
		)
}
export default MoonIconBtn