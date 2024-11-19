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
import scaleIcon from '../assets/img/Smart-Scale.png'
import unitazIcon from '../assets/img/unitaz.png'
import vacuumIcon from '../assets/img/vacuum-cleaner.png'
import deviceMoove from '../assets/img/device-moov.png'



export type CardsServer = {
	id: number,
	title: string,
	description: string,
	price: number,
	img: string,
}

export type CardsFromServer = CardsServer[]

export const CARDS: CardsFromServer = [
	{
		//Колонки
		id: 1,
		title: 'Колонка Алиса',
		description:
			'Умная колонка Яндекс Станция Мини с часами на YaGPT, черный оникс, 10Вт. Обновленная версия колонки с Алисой.',
		price: 6500,
		img: columnOne,
	},

	{
		id: 2,
		title: 'Колонка Яндекс 2',
		description:
			'Яндекс Станция 2 - умная колонка второго поколения с новым дизайном и центром управления умного дома.',
		price: 16800,
		img: columnThree,
	},
	{
		id: 3,
		title: 'Колонка Яндекс Макс',
		description:
			'Умная колонка Яндекс Станция Макс, данная модель совместима с операционными системами Android и iOS',
		price: 30000,
		img: columnFour,
	},

	//Отопление
	{
		id: 4,
		title: 'Термостат Honeywell',
		description:
			'Терморегулятор нового поколения, управляет системой электрообогрева «теплый пол»',
		price: 9000,
		img: termoOne,
	},
	{
		id: 5,
		title: 'Термостат Mijia',
		description:
			'Bluetooth датчик температуры и влажности, цифровой гигрометр с ЖК дисплеем',
		price: 700,
		img: termoTwo,
	},

	//Сушилки
	{
		id: 6,
		title: 'Навесная сушилка Mijia',
		description:
			'У Xiaomi Mi Mijia имеется 6 методов управления для сушки и контроля при температуре 45 градусов Цельсия',
		price: 24000,
		img: dryerOne,
	},

	//Видеоглазок
	{
		id: 7,
		title: 'Видеолглазок Doorbell',
		description:
			'Обеспечит огромный прирост к уровню безопасности. Огромным плюсом являтся обзор видомости 80 градусов.',
		price: 8400,
		img: videoEaseOne,
	},

	//Камера
	{
		id: 8,
		title: 'Камера Xiaomi Mijia',
		description:
			'Эргономичный дизайн и монолитный круглый корпус белого цвета, угол обзора - 360 градусов.',
		price: 18000,
		img: cameraOne,
	},

	//Умные весы
	{
		id: 9,
		title: 'Весы Smart Scale 2',
		description:
			'Умные весы от Xiaomi имеющие возможность синхронизации с телефоном на ОС Android, IOS.',
		price: 2000,
		img: scaleIcon,
	},

	//Унитаз
	{
		id: 10,
		title: 'Умный унитаз Meishida',
		description:
			'Умный многофункциональный робот унитаз / туалет. Новинка и бестселлер 2024 года.',
		price: 52000,
		img: unitazIcon,
	},

	//Пылесос
	{
		id: 11,
		title: 'Пылесос Midea VCR S8+',
		description:
			'Умный робот-пылесос, который отлично справится как с влажной, так и с сухой уборкой в Вашем доме',
		price: 18000,
		img: vacuumIcon,
	},

	//Датчик движения
	{
		id: 12,
		title: 'Датчик движения Uniel',
		description:
			'Датчик движения инфракрасный предназначен для автоматического включения и выключения нагрузки.',
		price: 29000,
		img: deviceMoove,
	},
]

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
		img: columnOne,
		imgTwo: columnTwo,
	},

	{
		id: '2',
		title: 'Яндекс Станция 2',
		description:
			'Стильный центр умного дома. Отлично звучит, отвечает на вопросы, управляет другими устройствами, и всё это с безупречным дизайном.',
		date: 2022,
		country: 'Россия',
		color: 'Черный',
		price: 16800,
		img: columnThree,
	},

	{
		id: '3',
		title: 'Колонка Яндекс Макс',
		description:
			'Мощный звук, яркий экран и расширенные возможности Алисы. Идеальное сочетание качества звука и интеллекта.',
		date: 2023,
		country: 'Россия',
		color: 'Темный кобальт',
		price: 30000,
		img: columnFour,
	},

	{
		id: '4',
		title: 'Термостат Honeywell',
		description:
			' Оптимальный температурный режим без лишних усилий. Установите температуру с телефона и наслаждайтесь комфортом, экономя при этом энергию.',
		date: 2018,
		country: 'Китай',
		color: 'Черный',
		price: 9000,
		img: termoOne,
	},

	{
		id: '5',
		title: 'Термостат Mijia',
		description:
			' Оптимальный температурный режим без лишних усилий. Установите температуру с телефона и наслаждайтесь комфортом, экономя при этом энергию.',
		date: 2017,
		country: 'Китай',
		color: 'Белый',
		price: 700,
		img: termoTwo,
	},

	{
		id: '6',
		title: 'Навесная сушилка Mijia',
		description:
			'Стильно и практично. Сушите бельё быстро и удобно, экономя место. Идеальное решение для небольших квартир.',
		date: 2020,
		country: 'Китай',
		color: 'Белый',
		price: 24000,
		img: dryerOne,
		imgTwo: dryerTwo,
	},

	{
		id: '7',
		title: 'Видеолглазок Doorbell',
		description:
			'Забудьте о нежданных гостях! Смотрите, кто у вашей двери, даже если вас нет дома. Получайте уведомления на телефон и общайтесь с гостями удаленно.',
		date: 2019,
		country: 'Китай',
		color: 'Черно-Серебристый',
		price: 8400,
		img: videoEaseOne,
		imgTwo: videoEaseTwo,
	},

	{
		id: '8',
		title: 'Камера Xiaomi Mijia',
		description:
			'Надёжная защита вашего дома. Высокое качество изображения, ночное видение и удобное управление через приложение.',
		date: 2016,
		country: 'Китай',
		color: 'Белый',
		price: 18000,
		img: cameraOne,
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
		img: deviceMoove,
	},
]
