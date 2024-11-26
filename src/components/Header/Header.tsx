import mainLogo from '../../assets/img/main-logo.svg'
import profileIcon from '../../assets/img/profile.svg'
import basketIcon from '../../assets/img/basket.svg'
import { Link } from 'react-router-dom'
import { Search } from '../Search/Search'
import { Theme } from '../../Theme/Theme'
import { useSelector } from 'react-redux'
import './Header.scss'

// type HeaderProps = {
// 	searchValue: string
// 	setSearchValue: React.Dispatch<React.SetStateAction<string>>
// }

export const Header = () => {
	const { items } = useSelector((state: any) => state.card)
	return (
		<>
			<div className='container'>
				<div className='header-wrapper'>
					<div className='light-part'>
						<div className='light-img'>
							<img src={mainLogo} alt='logo' />
						</div>
						<div className='light-text'>
							<h2 className='light-text__inner'>Light Buy</h2>
						</div>
					</div>
					<Search />
					<div className='header-right'>
						<div className='header-right__img'>
							<Theme />
						</div>
						<div className='header-right__welcome'>
							<div className='header-welcome__img'>
								<img
									className='header-welcome__img__inner'
									src={profileIcon}
									alt=''
								/>
							</div>
							<div className='header-welcome__btn'>
								<p className='header-welcome-btn__inner'>Войти</p>
							</div>
						</div>
						<Link to='/basket' className='header-welcome'>
							<div className=''>
								<img className='header-welcome__img' src={basketIcon} alt='' />
							</div>
							<div className="header-welcome__count">
								<p>{items.length}</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}