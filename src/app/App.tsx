import { Route, Routes } from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux"
// import { increment, decrement } from "../redux/slices/FilterSlice.ts"
import { Header } from "../components/Header/Header.tsx"
import Home from "../pages/Home.tsx"
import { Basket } from "../components/Basket/Basket.tsx"
import { createContext, useState } from "react"
import { ThemeProvider } from "../Provider/ThemeProvider.tsx"
import { MoreCard } from "../pages/MoreCard.tsx"

export const SearchContext = createContext({ })

function App() {
	const [searchValue, setSearchValue] = useState('')
  return (
		<>
			<ThemeProvider>
				<SearchContext.Provider value={{ searchValue, setSearchValue }}>
					<Header />
					<Routes>
						<Route
							path='/'
							element={<Home searchValue={searchValue} />}
							index
						/>
						<Route
							path='/more-card/:id'
							element={
								<MoreCard />
							}
						/>
						<Route path='/basket' element={<Basket />} />
					</Routes>
				</SearchContext.Provider>
			</ThemeProvider>
		</>
	)
}

export default App


