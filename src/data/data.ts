import columnOne from '../../public/assets/img/yandex_kolonka.png'
import columnTwo from '../../public/assets/img/yandex-kolonka.png'
import columnThree from '../../public/assets/img/yandex-krestina.png'
import columnFour from '../../public/assets/img/yandex-krestina-2.png'
import dryerOne from '../../public/assets/img/xiaomi-sushilka-1.png'
import dryerTwo from '../../public/assets/img/xiaomi-sushilka-2.png'
import termoOne from '../../public/assets/img/termo-honeywell.png'
import termoTwo from '../../public/assets/img/xiaomi-termo-1.png'
import videoEaseOne from '../../public/assets/img/video-ease-1.png'
import videoEaseTwo from '../../public/assets/img/video-ease-2.png'
import cameraOne from '../../public/assets/img/xiaomi-camera.png'
import scaleIcon from '../../public/assets/img/Smart-Scale.png'
import unitazIcon from '../../public/assets/img/unitaz.png'
import vacuumIcon from '../../public/assets/img/vacuum-cleaner.png'
import deviceMoove from '../../public/assets/img/device-moov.png'



export type CardsServer = {
	id: number
	title: string
	description: string
	price: number
	img: string
	category: string,
	filter: string,
	count: number
}

export type CardsFromServer = CardsServer[]

export const MORECARD = [
	{
		id: '1',
		title: 'Алиса с YandexGPT',
		description:
			'Ваш личный помощник с невероятными возможностями! Задавайте вопросы, генерируйте тексты, управляйте умным домом – всё в одном устройстве. Больше, чем просто голосовой помощник – это ваш интеллектуальный компаньон.',
		date: 2021,
		country: 'Россия',
		color: 'Черный',
		price: 6500,
		management: 'Да', //Управление с телефона
		warranty: 'Да', //Гарантия
		warrantyTerm: 12, //Срок гарантии
		supportAI: 'Да', //Поддержка AI
		width: 11, //Ширина
		height: 6, //Высота
		img: columnOne,
		imgTwo: columnTwo,
	},

	{
		id: '2',
		title: 'Термостат Honeywell',
		description:
			' Оптимальный температурный режим без лишних усилий. Установите температуру с телефона и наслаждайтесь комфортом, экономя при этом энергию.',
		date: 2018,
		country: 'Китай',
		color: 'Черный',
		price: 9000,
		management: 'Имеется',
		warranty: 'Имеется',
		warrantyTerm: 12,
		supportAI: 'Имеется',
		width: 7,
		height: 3,
		img: termoOne,
	},

	{
		id: '3',
		title: 'Навесная сушилка Mijia',
		description:
			'Стильно и практично. Сушите бельё быстро и удобно, экономя место. Идеальное решение для небольших квартир.',
		date: 2020,
		country: 'Китай',
		color: 'Белый',
		price: 24000,
		management: 'Нет',
		warranty: 'Да',
		warrantyTerm: 14,
		supportAI: 'Нет',
		width: 200,
		height: 100,
		img: dryerOne,
		imgTwo: dryerTwo,
	},

	{
		id: '4',
		title: 'Видеолглазок Doorbell',
		description:
			'Забудьте о нежданных гостях! Смотрите, кто у вашей двери, даже если вас нет дома. Получайте уведомления на телефон и общайтесь с гостями удаленно.',
		date: 2019,
		country: 'Китай',
		color: 'Черно-Серебристый',
		price: 8400,
		management: 'Да',
		warranty: 'Да',
		warrantyTerm: 12,
		supportAI: 'Нет',
		width: 200,
		height: 100,
		img: videoEaseOne,
		imgTwo: videoEaseTwo,
	},

	{
		id: '5',
		title: 'Яндекс Станция 2',
		description:
			'Стильный центр умного дома. Отлично звучит, отвечает на вопросы, управляет другими устройствами, и всё это с безупречным дизайном.',
		date: 2022,
		country: 'Россия',
		color: 'Черный',
		price: 16800,
		management: 'Да',
		warranty: 'Да',
		warrantyTerm: 9,
		supportAI: 'Имеется',
		width: 12,
		height: 24,
		img: columnThree,
	},

	{
		id: '6',
		title: 'Камера Xiaomi Mijia',
		description:
			'Надёжная защита вашего дома. Высокое качество изображения, ночное видение и удобное управление через приложение.',
		date: 2016,
		country: 'Китай',
		color: 'Белый',
		price: 18000,
		management: 'Нет',
		warranty: 'Да',
		warrantyTerm: 5,
		supportAI: 'Нет',
		width: 5,
		height: 15,
		img: cameraOne,
	},

	{
		id: '7',
		title: 'Колонка Яндекс Макс',
		description:
			'Мощный звук, яркий экран и расширенные возможности Алисы. Идеальное сочетание качества звука и интеллекта.',
		date: 2023,
		country: 'Россия',
		color: 'Темный кобальт',
		price: 30000,
		management: 'Да',
		warranty: 'Да',
		warrantyTerm: 8,
		supportAI: 'Нет',
		width: 8,
		height: 24,
		img: columnFour,
	},

	{
		id: '8',
		title: 'Термостат Mijia',
		description:
			' Оптимальный температурный режим без лишних усилий. Установите температуру с телефона и наслаждайтесь комфортом, экономя при этом энергию.',
		date: 2017,
		country: 'Китай',
		color: 'Белый',
		price: 700,
		management: 'Нет',
		warranty: 'Да',
		warrantyTerm: 14,
		supportAI: 'Нет',
		width: 5,
		height: 10,
		img: termoTwo,
	},

	{
		id: '9',
		title: 'Весы Smart Scale 2',
		description:
			'Следите за своим здоровьем! Точные измерения веса, анализа состава тела, и синхронизация данных с приложением.',
		date: 2019,
		country: 'Китай',
		color: 'Серебристый',
		price: 2000,
		management: 'Нет',
		warranty: 'Да',
		warrantyTerm: 7,
		supportAI: 'Нет',
		width: 15,
		height: 1.5,
		img: scaleIcon,
	},

	{
		id: '10',
		title: 'Умный унитаз Meishida',
		description:
			'Комфорт нового уровня! Функции биде, подогрев сиденья и многое другое сделают посещение туалета настоящим удовольствием.',
		date: 2024,
		country: 'Китай',
		color: 'Белый',
		price: 52490,
		management: 'Да',
		warranty: 'Да',
		warrantyTerm: 5,
		supportAI: 'Да',
		width: 50,
		height: 80,
		img: unitazIcon,
	},

	{
		id: '11',
		title: 'Пылесос Midea VCR S8+',
		description:
			'Чистота без усилий! Мощная уборка, автоматическая очистка пылесборника и удобное управление.',
		date: 2023,
		country: 'Китай',
		color: 'Белый',
		price: 18000,
		management: 'Да',
		warranty: 'Да',
		warrantyTerm: 3,
		supportAI: 'Нет',
		width: 38,
		height: 50,
		img: vacuumIcon,
	},

	{
		id: '12',
		title: 'Датчик движения Uniel',
		description:
			'Умный свет и безопасность. Включайте свет автоматически при движении и отключайте его, когда никого нет.',
		date: 2022,
		country: 'Китай',
		color: 'Белый',
		price: 29000,
		management: 'Да',
		warranty: 'Да',
		warrantyTerm: 4,
		supportAI: 'Нет',
		width: 4,
		height: 9,
		img: deviceMoove,
	},
]
