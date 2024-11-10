import { CARDS } from "../data/data.ts"
import { Header } from "../components/Header/Header.tsx"
import Card from "../components/Card/Card.tsx"
import { Assortement } from "../components/Assortement/Assortement.tsx"

function App() {

  return (
		<>
			<Header />
			<Assortement />
			{CARDS.map(card => (
				<Card
					title={card.title}
					description={card.description}
					price={card.price}
					img={card.img}
          			key={card.id}
				/>
      ))}
		</>
	)
}

export default App


