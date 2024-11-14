import { Filtering } from "../../components/Filtering/Filtering";
import Card, { CardSecond } from "../../components/Card/Card";
import { Pagination } from "../../components/Pagination/Pagination";
import './Home.scss'
import { useState } from "react";

export const Home = () => {
    const [ tab, setTab ] = useState('card')
    return (
			<>
				<div className='home-wrapper'>
					<div className='home-left'>
						<Filtering />
					</div>
					{tab === 'card' && <div className='home-right'>
							<Card />
						</div>}
					{tab === 'second-card' && (
                        <CardSecond />
					)}
				</div>
				<Pagination active={tab} onChange={(current) => setTab(current)} />
			</>
		)
}