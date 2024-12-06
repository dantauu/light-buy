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


	const updateItems = useCallback((newItems: CardItem[]) => {
		setItems(newItems)
	}, [])


	useEffect(() => {
		if (isInitialMount.current) {
			const storedItems = localStorage.getItem(key)
			if (storedItems) {
				try {
					const parsedItems: CardItem[] = JSON.parse(storedItems)
					updateItems(parsedItems)
				} catch (error) {
					updateItems(initialValue)
				}
			} else {
				updateItems(initialValue) 
			}
			isInitialMount.current = false 
		}
	}, [key, initialValue, updateItems]) 

	useEffect(() => {
		if (!isInitialMount.current) {
			localStorage.setItem(key, JSON.stringify(items))
		}
	}, [items, key]) 

	return items
}
