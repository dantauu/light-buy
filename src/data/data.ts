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
import kitchenIcon from '../../public/assets/img/kitchen.svg'
import toiletIcon from '../../public/assets/img/toilet.svg'
import livingRoomIcon from '../../public/assets/img/living-room.svg'
import hallwayIcom from '../../public/assets/img/hallway.svg'
import childrensIcon from '../../public/assets/img/childrens.svg'
import bedRoomIcon from '../../public/assets/img/bed-room.svg'



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
			'Умная колонка Яндекс Станция Мини с часами на YaGPT, черный оникс, 10Вт. Обновленная версия колонки с Алисой.Ваш личный помощник с невероятными возможностями! Задавайте вопросы, генерируйте тексты, управляйте умным домом – всё в одном устройстве. Больше, чем просто голосовой помощник – это ваш интеллектуальный компаньон.',
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
			'Терморегулятор нового поколения, управляет системой электрообогрева «теплый пол».Оптимальный температурный режим без лишних усилий. Установите температуру с телефона и наслаждайтесь комфортом, экономя при этом энергию.',
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
			'У Xiaomi Mi Mijia имеется 6 методов управления для сушки и контроля при температуре 45 градусов Цельсия. Стильно и практично. Сушите бельё быстро и удобно, экономя место. Идеальное решение для небольших квартир.',
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
			'Обеспечит огромный прирост к уровню безопасности. Огромным плюсом являтся обзор видомости 80 градусов. Забудьте о нежданных гостях! Смотрите, кто у вашей двери, даже если вас нет дома. Получайте уведомления на телефон и общайтесь с гостями удаленно.',
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
			'Яндекс Станция 2 - умная колонка второго поколения с новым дизайном и центром управления умного дома. Стильный центр умного дома. Отлично звучит, отвечает на вопросы, управляет другими устройствами, и всё это с безупречным дизайном.',
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
			'Эргономичный дизайн и монолитный круглый корпус белого цвета, угол обзора - 360 градусов. Надёжная защита вашего дома. Высокое качество изображения, ночное видение и удобное управление через приложение.',
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
			'Умная колонка Яндекс Станция Макс, данная модель совместима с операционными системами Android и iOS. Мощный звук, яркий экран и расширенные возможности Алисы. Идеальное сочетание качества звука и интеллекта.',
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
			'Bluetooth датчик температуры и влажности, цифровой гигрометр с ЖК дисплеем  Оптимальный температурный режим без лишних усилий. Установите температуру с телефона и наслаждайтесь комфортом, экономя при этом энергию.',
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
			'Умные весы от Xiaomi имеющие возможность синхронизации с телефоном на ОС Android, IOS. Следите за своим здоровьем! Точные измерения веса, анализа состава тела, и синхронизация данных с приложением.',
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
			'Умный робот унитаз / туалет. Новинка и бестселлер 2024 года. Комфорт нового уровня! Функции биде, подогрев сиденья и многое другое сделают посещение туалета настоящим удовольствием.',
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
			'Умный робот-пылесос, который отлично справится как с влажной, так и с сухой уборкой в Вашем доме. Чистота без усилий! Мощная уборка, автоматическая очистка пылесборника и удобное управление.',
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
			'Датчик движения предназначен для автоматического включения и выключения нагрузки. Умный свет и безопасность. Включайте свет автоматически при движении и отключайте его, когда никого нет.',
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


export const FilterItemsMobile = [
	{ id: 1, name: 'Кухни', img: kitchenIcon },
	{ id: 2, name: 'Уборной', img: toiletIcon },
	{ id: 3, name: 'Гостинной', img: livingRoomIcon },
	{ id: 4, name: 'Коридора', img: hallwayIcom },
	{ id: 5, name: 'Детской', img: childrensIcon },
	{ id: 6, name: 'Спальной', img: bedRoomIcon },
]