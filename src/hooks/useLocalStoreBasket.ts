import { useState, useEffect, useCallback, useRef } from 'react'

interface CardItem {
	id: number
	title: string
	price: number
	img: string
	count: number
}

export const useLocalStoreBasket = (key: string, initialValue: CardItem[]) => {
	const [items, setItems] = useState<CardItem[]>(initialValue)
	const isInitialMount = useRef(true)

	// Функция для обновления состояния корзины
	const updateItems = useCallback((newItems: CardItem[]) => {
		setItems(newItems)
	}, [])

	// Загрузка данных из localStorage только при первом рендере
	useEffect(() => {
		if (isInitialMount.current) {
			const storedItems = localStorage.getItem(key)
			if (storedItems) {
				try {
					const parsedItems: CardItem[] = JSON.parse(storedItems)
					updateItems(parsedItems)
				} catch (error) {
					updateItems(initialValue) // Если ошибка, используем начальное значение
				}
			} else {
				updateItems(initialValue) // Если данных нет в localStorage, используем начальное значение
			}
			isInitialMount.current = false // Устанавливаем флаг первого рендера
		}
	}, [key, initialValue, updateItems]) // Этот useEffect срабатывает только при первом рендере

	// Обновление localStorage, когда состояние корзины изменяется
	useEffect(() => {
		if (!isInitialMount.current) {
			localStorage.setItem(key, JSON.stringify(items))
		}
	}, [items, key]) // Этот useEffect срабатывает каждый раз, когда изменяются товары в корзине

	return items
}
