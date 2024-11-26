import { Link } from "react-router-dom";
import logoutIcon from '../../../assets/img/logout.svg'
import './BackBtn.scss'


export const BackBtn = () => {
    return (
			<Link to='/' className='more-card__logout'>
				<div className='logout-wrapper'>
					<img className='logout-card__img' src={logoutIcon} alt='' />
				</div>
				<p className='logout-text'>Назад</p>
			</Link>
		)
}
