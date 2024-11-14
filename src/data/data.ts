import columnOne from '../assets/img/yandex_kolonka.png'
import columnThree from '../assets/img/yandex-krestina.png'
import columnFour from '../assets/img/yandex-krestina-2.png'
import dryerOne from '../assets/img/xiaomi-sushilka-1.png'
import termoOne from '../assets/img/termo-honeywell.png'
import termoTwo from '../assets/img/xiaomi-termo-1.png'
import videoEaseOne from '../assets/img/video-ease-1.png'
import cameraOne from '../assets/img/xiaomi-camera.png'
import scaleIcon from '../assets/img/Smart-Scale.png'
import unitazIcon from '../assets/img/unitaz.png'
import vacuumIcon from '../assets/img/vacuum-cleaner.png'
import deviceMoove from '../assets/img/device-moov.png'


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
			'Умная колонка Яндекс Станция Мини с часами на YaGPT, черный оникс, 10Вт. Обновленная версия колонки с Алисой.',
		price: 6500,
		img: columnOne,
	},

	{
		id: 2,
		title: 'Яндекс Станция 2',
		description:
			'Умная колонка второго поколения с новым дизайном, звуком, центром управления умного дома.',
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
		price: 18000,
		img: scaleIcon,
	},

	//Унитаз
	{
		id: 10,
		title: 'Умный унитаз Meishida',
		description:
			'Умный многофункциональный робот унитаз / туалет. Новинка и бестселлер 2024 года.',
		price: 18000,
		img: unitazIcon,
	},

	//Пылесос
	{
		id: 12,
		title: 'Пылесос Midea VCR S8+',
		description:
			'Умный робот-пылесос, который отлично справится как с влажной, так и с сухой уборкой в Вашем доме',
		price: 18000,
		img: vacuumIcon,
	},

	//Датчик движения
	{
		id: 13,
		title: 'Датчик движения Uniel',
		description:
			'Датчик движения инфракрасный предназначен для автоматического включения и выключения нагрузки.',
		price: 18000,
		img: deviceMoove,
	},
]
