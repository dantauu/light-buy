import columnOne from '../assets/img/yandex_kolonka.png'
import columnTwo from '../assets/img/yandex-kolonka.png'
import columnThree from '../assets/img/yandex-krestina.png'
import columnFour from '../assets/img/yandex-krestina-2.png'

import dryerOne from '../assets/img/xiaomi-sushilka-1.png'
import dryerTwo from '../assets/img/xiaomi-sushilka-2.png'

import termoOne from '../assets/img/termo-honeywell.png'
import termoTwo from '../assets/img/xiaomi-termo-1.png'

import videoEaseOne from '../assets/img/video-ease-1.png'
import videoEaseTwo from '../assets/img/video-ease-2.png'

import cameraOne from '../assets/img/xiaomi-camera.png'


export type CardsServer = {
	id: number,
	title?: string,
	description?: string,
	price?: number,
	img: string,
}

export type CardsFromServer = CardsServer[]

export const CARDS: CardsFromServer = [
	{
		//Колонки
		id: 1,
		title: 'Алиса с YandexGPT',
		description:
			'Умная колонка Яндекс Станция Мини с часами на YaGPT, черный оникс, 10Вт. Обновленная версия умной колонки с голосовым ассистентом Алисой.',
		price: 6500,
		img: columnOne,
	},
	{
		id: 2,
		img: columnTwo,
	},
	{
		id: 3,
		title: 'Умная колонка Яндекс Станция 2 Темный кобальт',
		description:
			'Умная колонка второго поколения с новым дизайном, звуком, центром управления умного дома и Алисой. Любимая музыка с чистым и глубоким звучанием, без искажений.',
		price: 16800,
		img: columnThree,
	},
	{
		id: 4,
		title: 'Умная колонка Яндекс Макс',
		description:
			'Умная колонка Яндекс Станция Макс, данная модель совместима с операционными системами Android и iOS',
		price: 30000,
		img: columnFour,
	},

	//Отопление
	{
		id: 5,
		title: 'Отопление Отопление Отопление',
		description:
			'Отопление Отопление Отопление Отопление Отопление Отопление Отопление Отопление Отопление Отопление Отопление Отопление Отопление Отопление',
		price: 20000,
		img: termoOne,
	},
	{
		id: 6,
		title: 'Отопление2 Отопление2 Отопление2 Отопление2 Отопление2',
		description:
			'Отопление2 Отопление2 Отопление2 Отопление2 Отопление2 Отопление2 Отопление2 Отопление2 Отопление2 Отопление2',
		price: 23000,
		img: termoTwo,
	},

	//Сушилки
	{
		id: 7,
		title: 'Сушилка Сушилка Сушилка Сушилка Сушилка Сушилка',
		description:
			'Сушилка Сушилка Сушилка Сушилка Сушилка СушилкаСушилка Сушилка Сушилка Сушилка Сушилка СушилкаСушилка Сушилка Сушилка Сушилка Сушилка Сушилка',
		price: 24000,
		img: dryerOne,
	},
	{
		id: 8,
		img: dryerTwo,
	},

	//Видеоглазок
	{
		id: 9,
		title: 'Видеолглазок Видеолглазок Видеолглазок ',
		description:
			'Видеолглазок Видеолглазок Видеолглазок Видеолглазок Видеолглазок Видеолглазок Видеолглазок Видеолглазок Видеолглазок Видеолглазок Видеолглазок',
		price: 8400,
		img: videoEaseOne,
	},
	{
		id: 10,
		title: 'Видеолглазок2 Видеолглазок2 Видеолглазок2 Видеолглазок2',
		description:
			'Видеолглазок2 Видеолглазок2 Видеолглазок2 Видеолглазок2 Видеолглазок2 Видеолглазок2 Видеолглазок2 Видеолглазок2 ',
		price: 9120,
		img: videoEaseTwo,
	},

	//Камеры
	{
		id: 11,
		title: 'Camera Camera Camera Camera',
		description:
			'Camera Camera Camera Camera Camera Camera Camera Camera Camera Camera Camera Camera Camera Camera Camera Camera',
		price: 18000,
		img: cameraOne,
	},
]
