import { Route, Routes } from "react-router-dom"
import { BasketPage } from "../pages/BasketPage.tsx"
import { Header } from "../components/Header/Header.tsx"
import Home from "../pages/Home.tsx"
import { createContext, useState } from "react"
import { ThemeProvider } from "../Provider/ThemeProvider.tsx"
import { MoreCard } from "../pages/MoreCard.tsx"
import { Modal } from "../components/Modal/Modal.tsx"

interface ModalContextProps {
	showModal: boolean
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalValue: ModalContextProps = {
	showModal: false,
	setShowModal: () => {},
}

export const ModalContext = createContext(ModalValue)
export const SearchContext = createContext(({}))


function App() {
	const [searchValue, setSearchValue] = useState<string>('')
	const [showModal, setShowModal] = useState<boolean>(false)
  return (
		<>
			<ThemeProvider>
				<SearchContext.Provider value={{ searchValue, setSearchValue }}>
					<ModalContext.Provider value={{showModal, setShowModal}}>
						{showModal && <Modal />}
						<Header />
						<Routes>
							<Route path='/' element={<Home />} index />
							<Route path='/more-card/:id' element={<MoreCard />} />
							<Route path='/basket' element={<BasketPage />} />
						</Routes>
					</ModalContext.Provider>
				</SearchContext.Provider>
			</ThemeProvider>
		</>
	)
}

export default App


