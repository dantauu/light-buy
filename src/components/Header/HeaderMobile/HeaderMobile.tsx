import { useContext, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ModalContext } from "../../../app/App"
import { logout, selectIsAuth } from "../../../redux/slices/authSlice"
import { Link } from "react-router-dom"
import { Theme } from "../../../Theme/Theme"
import profileIcon from '../../../../public/assets/img/profile.svg'
import basketIcon from '../../../../public/assets/img/basket.svg'
import '../Header.scss'


export const HeaderMobile = () => {
    const { items } = useSelector((state: any) => state.card)
		const { setShowModal } = useContext(ModalContext)
		const [isActive, setIsActive] = useState<boolean>(false)
		const dispatch = useDispatch()
		const isAuth = useSelector(selectIsAuth)
		const onClickLogout = () => {
			dispatch(logout())
			window.localStorage.removeItem('token')
		}
    return (
			<div className='container header__container-mobile'>
				<div className='header__wrapper-mobile'>
					<div className='header-right__wrapper'>
						<div
							onClick={() => setIsActive(false)}
							className={`header-right header-mobile ${
								isActive ? 'active-right' : ''
							}`}
						>
							<div className='header-right__img'></div>
							{isAuth ? (
								<div onClick={onClickLogout} className='header-right__welcome'>
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
							<Theme />
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
		)
}