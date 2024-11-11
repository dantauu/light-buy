import { FC } from "react"
import { Checkbox } from "../shared/Checkbox"
import './Filtering.scss'

// const FilteringData = [
// 	{ name: 'Со скидкой' },
// 	{ name: 'Новинки' },
// 	{ name: 'Цена от и до' },
// 	{ name: 'Для' },
// 	{ name: 'Кухни' },
// 	{ name: 'Уборной' },
// 	{ name: 'Гостинной' },
// 	{ name: 'Коридора' },
// 	{ name: 'Детской' },
// 	{ name: 'Спальной' },
// 	{ name: 'Показать всё' },
// ]

type FilterItemProps = {
    text: string,
}

const FilterItem: FC<FilterItemProps> = ({ text }) => {
    return (
			<div className='after-filter'>
				<div className='after-filter__discount'>
					<label htmlFor=''>
						<Checkbox />
					</label>
				</div>
				<div className='after-filter__text'>
					<p className='filter-discount__inner'>{text}</p>
				</div>
			</div>
		)
}

export const Filtering = () => {
    return (
			<div className='filter-main__wrapper'>
				<div className='container'>
					<h2 className='filter-title'>Фильтрация</h2>
					<FilterItem text='Со скидкой' />
					<FilterItem text='Новинки' />
				</div>
			</div>
		)
}