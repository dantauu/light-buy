import { Route, Routes } from "react-router-dom"
import { Header } from "../components/ComponentsByHome/Header/Header.tsx"
import Home from "../pages/Home/Home.tsx"
// import { Layout } from "../components/Layout/Layout.tsx"
import { MoreCard } from "../components/CompMoreCard/MoreCard/MoreCard.tsx"
import { useState } from "react"

function App() {
	const [searchValue, setSearchValue] = useState('')
  return (
		<>
			<Header searchValue={searchValue} setSearchValue={setSearchValue} />
			<Routes>
				{/* <Route path="/" element={<Layout />} />  */}
				<Route path='/' element={<Home searchValue={searchValue} />} index />
				<Route path='/more-card/:id' element={<MoreCard />} />
			</Routes>
		</>
	)
}

export default App


