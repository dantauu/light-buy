import basketIcon from '../../assets/img/basket.svg'
import basketClear from '../../assets/img/basket-clear.svg'
import columnTest from '../../assets/img/yandex-kolonka.png'
import minusIcon from '../../assets/img/minus.svg'
import plusIcon from '../../assets/img/plus.svg'
import krestIcon from '../../assets/img/cross.svg'
import './Basket.scss'
import { BackBtn } from '../shared/BackBtn/BackBtn'


export const Basket = () => {
    return (
			<div className='basket-wrapper'>
				<div className='container-basket'>
					<BackBtn />
					<div className='basket-top'>
						<div className='basket-top__left'>
							<div className='basket-top__img'>
								<img src={basketIcon} />
							</div>
							<div className='basket-left__text'>
								<p>Корзина</p>
							</div>
						</div>
						<div className='basket-clear'>
							<div className='basket-clear__img'>
								<img src={basketClear} />
							</div>
							<div className='basket-clear__text'>
								<p>Очистить корзину</p>
							</div>
						</div>
					</div>
					<div className='basket-card__wrapper'>
						<div className='basket-card'>
                            <div className="basket-img__title">
                                <div className='basket-card__img'>
                                    <img src={columnTest} />
                                </div>
                                <div className='basket-card__title'>
                                    <p>Колонка алиса</p>
                                </div>
                            </div>
							<div className='bascet-card__count'>
								<div className='basket-card-count-img__minus'>
									<img src={minusIcon} />
								</div>
								<div className='basket-card-count__inner'>
									<p>3</p>
								</div>
								<div className='basket-card-count-img__plus'>
									<img src={plusIcon} />
								</div>
							</div>
                            <div className="basket-card__price">
                                <p>6500р</p>
                            </div>
                            <div className="basket-card__krest">
                                <img className='basket-krest__img' src={krestIcon} />
                            </div>
						</div>
					</div>
				</div>
			</div>
		)
}