import { Header } from "../components/Header/Header.tsx"
// import Card from "../components/Card/Card.tsx"
import { Assortement } from "../components/Assortement/Assortement.tsx"
import { Filtering } from "../components/Filtering/Filtering.tsx"

function App() {

  return (
		<>
			<Header />
			<Assortement />
			{/* <Card /> */}
			<Filtering />
		</>
	)
}

export default App


