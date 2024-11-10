import mainLogo from '../../assets/img/main-logo.svg'
import profileIcon from '../../assets/img/profile.svg'
import basketIcon from '../../assets/img/basket.svg'
// import moonIcon from '../../assets/img/moon.png'
import glass from '../../assets/img/glass.png'
import './Header.scss'

export const Header = () => {
    return (
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

					<label htmlFor='hI'>
						<div className='header-input'>
							<div className='header-input__img'>
								<img src={glass} alt='glass' />
							</div>
							<div className='header-target__input'>
								<input
									placeholder='Поиск товара...'
									id='hI'
									type='text'
									className='header-input__inner'
								/>
							</div>
						</div>
					</label>

					<div className='header-right'>
                        {/* ЗДЕСЬ КНОПКА ТЕМНОЙ ТЕМЫ */}
						<div className='header-right__welcome'>
							<div className='header-welcome__img'>
								<img
									className='header-welcome__img__inner'
									src={profileIcon}
									alt=''
								/>
							</div>
							<div className='header-welcome__btn'>Войти</div>
						</div>
						<div className='header-welcome'>
							<img className='header-welcome__img' src={basketIcon} alt='' />
						</div>
					</div>
				</div>
			</div>
		)
    
}