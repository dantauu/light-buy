import mainLogo from '../../../public/main-logo-2.svg'
import profileIcon from '../../../public/assets/img/profile.svg'
import basketIcon from '../../../public/assets/img/basket.svg'
import { Link } from 'react-router-dom'
import { Search } from '../Search/Search'
import { Theme } from '../../Theme/Theme'
import { useDispatch, useSelector } from 'react-redux'
import { useContext, useState } from 'react'
import { ModalContext } from '../../app/App'
import { logout, selectIsAuth } from '../../redux/slices/authSlice'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { HeaderMobile } from './HeaderMobile/HeaderMobile'
import './Header.scss'

// type HeaderProps = {
// 	searchValue: string
// 	setSearchValue: React.Dispatch<React.SetStateAction<string>>
// }

export const Header = () => {
	// const cardItem = useSelector((_items: CardItem[]))
	const isMobile = useMediaQuery('(max-width: 719px)')
	const { items } = useSelector((state: any) => state.card)
	const { setShowModal } = useContext(ModalContext)
	const [isActive, setIsActive] = useState<boolean>(false)
	const activeBurger = () => {
		setIsActive(!isActive)
	}
	const dispatch = useDispatch()
	const isAuth = useSelector(selectIsAuth)
	const onClickLogout = () => {
		dispatch(logout())
		window.localStorage.removeItem('token')
	}
	return (
		<>
			{isMobile ? (
				<div className='container'>
					<div className='burger-wrapper'>
						<div className=''>
							<Link to={'/'} className='light__text-mobile'>LightBuy</Link>
						</div>
						<div onClick={() => activeBurger()} className={`burger-img ${isActive && 'open'}`}>
							<div className='burger'></div>
							<div className='burger'></div>
							<div className='burger'></div>
						</div>
					</div>
					{isActive && <HeaderMobile isActive={isActive} 
					setIsActive={setIsActive} />}
				</div>
			) : (
				<>
					<div className='container'>
						<div className='header-wrapper'>
							<Link to={'/'} className='light-part'>
								<div className='light-img'>
									<img src={mainLogo} alt='logo' />
								</div>
								<div className='light-text'>
									<h2 className='light-text__inner'>Light Buy</h2>
								</div>
							</Link>
							<Search />
							<div className='header-right__wrapper'>
								<div
									onClick={() => setIsActive(false)}
									className={`header-right ${isActive ? 'active-right' : ''}`}
								>
									<div className='header-right__img'>
										<Theme />
									</div>
									{isAuth ? (
										<div
											onClick={onClickLogout}
											className='header-right__welcome'
										>
											<div className='header-welcome__img'>
												<img
													className='header-welcome__img__inner'
													src={profileIcon}
													alt=''
												/>
											</div>
											<div className='header-welcome__btn'>
												<p className='header-welcome-btn__inner'>Выйти</p>
											</div>
										</div>
									) : (
										<div
											onClick={() => setShowModal(true)}
											className='header-right__welcome'
										>
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
									)}
									<Link to='/basket' className='header-welcome'>
										<div className=''>
											<img
												className='header-welcome__img'
												src={basketIcon}
												alt=''
											/>
										</div>
										<div className='header-welcome__count'>
											<p>{items.length}</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{ borderBottom: '1px solid #ededed' }}
						className='border'
					></div>
				</>
			)}
		</>
	)
}

