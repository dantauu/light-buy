import load from '../../assets/img/loading.png'

export const Loading = () => {
    return (
			<>
				<div className='card-wrapper'>
                    {Array.from({ length: 6 }, (_, index) => (
                        <div className='loading-item' key={index}>
                            <img className='loading' src={load} alt='Загрузка...' />
                        </div>
                    ))}
                </div>
			</>
		)
}

