import basketIcon from '../../assets/img/basket.svg'
import basketClear from '../../assets/img/basket-clear.svg'
import { BackBtn } from '../shared/BackBtn/BackBtn'
import { useDispatch, useSelector } from 'react-redux'
import './Basket.scss'
import { BasketElement } from './BasketElement/BasketElement'
import { JSX } from 'react/jsx-runtime'
import { addItem, clearItem } from '../../redux/slices/cardSlice'
import { useLocalStoreBasket } from '../../hooks/useLocalStoreBasket'
import { useEffect, useRef } from 'react'

interface CardItem {
	id: number
	title: string
	price: number
	img: string
	count: number
}

export const Basket = () => {
	const dispatch = useDispatch()
	const items = useSelector((state: any) => state.card.items)

	const itemsFromStorage: CardItem[] = useLocalStoreBasket('basket', [])
	const hasInitialized = useRef(false)

	useEffect(() => {
		if (!hasInitialized.current && itemsFromStorage.length > 0) {
			itemsFromStorage.forEach(item => {
				dispatch(addItem(item))
			})
			hasInitialized.current = true
		}
	}, [itemsFromStorage, dispatch, items.length])

	useEffect(() => {
		if (items.length > 0) {
			localStorage.setItem('basket', JSON.stringify(items))
		} else {
			localStorage.removeItem('basket')
		}
	}, [items])


	const totalPrice = items.reduce(
		(sum: number, item: { count: number; price: number }) =>
			sum + item.price * item.count,
		0
	)

	const totalCount = items.reduce(
		(sum: any, item: { count: any }) => sum + item.count,
		0
	)

	const onClickClear = () => {
		dispatch(clearItem())
		console.log('удалено')
	}

	return (
		<div className='container'>
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
						<div onClick={onClickClear} className='basket-clear'>
							<div className='basket-clear__img'>
								<img src={basketClear} />
							</div>
							<div className='basket-clear__text'>
								<p>Очистить корзину</p>
							</div>
						</div>
					</div>
					{items.map(
						(
							item: JSX.IntrinsicAttributes & {
								img: string
								title: string
								price: number
								count: number
								id: number
							}
						) => (
							<BasketElement key={item.id} {...item} />
						)
					)}
					<div className='full-data'>
						<div className='total-count'>
							<p className='full-count__text'>
								Количество товаров:
								<span className='span-full-data'> {totalCount} шт.</span>
							</p>
						</div>
						<div className='total-price'>
							<p className='full-price__text'>
								Общая сумма:
								<span className='span-full-data'> {totalPrice}р</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
