import { Route, Routes } from "react-router-dom"
import { BasketPage } from "../pages/BasketPage.tsx"
import { Header } from "../components/Header/Header.tsx"
import Home from "../pages/Home.tsx"
import { createContext, useEffect, useRef, useState } from "react"
import { ThemeProvider } from "../Provider/ThemeProvider.tsx"
import { MoreCard } from "../pages/MoreCard.tsx"
import { Modal } from "../components/ModalAuth/Modal.tsx"
import { CSSTransition } from "react-transition-group"
import { useDispatch } from "react-redux"
import { fetchAuthMe } from "../redux/slices/authSlice.ts"
import { AppDispatch } from "../redux/store.ts"
import { ModalRegister } from "../components/ModalRegistr/ModalRegistr.tsx"

interface ModalContextProps {
	showModal: boolean
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalValue: ModalContextProps = {
	showModal: false,
	setShowModal: () => {},
}

export const ModalContext = createContext(ModalValue)
export const SearchContext = createContext(({})) //!


function App() {
	//Проверка есть ли пользователь
	const dispatch = useDispatch<AppDispatch>()
	useEffect(() => {
		dispatch(fetchAuthMe())
	}, [])
	const [searchValue, setSearchValue] = useState<string>('')
	const [showModal, setShowModal] = useState<boolean>(false)
	const modalRef = useRef(null)
  return (
		<>
			<ThemeProvider>
				<SearchContext.Provider value={{ searchValue, setSearchValue }}>
					<ModalContext.Provider value={{ showModal, setShowModal }}>
						<CSSTransition
							in={showModal}
							timeout={300}
							classNames="modal-anim"
							unmountOnExit={true}
							mountOnEnter
							nodeRef={modalRef}
						>
							<Modal modalRef={modalRef} />
						</CSSTransition>
						<Header />
						<Routes>
							<Route path='/' element={<Home />} index />
							<Route path='/more-card/:id' element={<MoreCard />} />
							<Route path='/basket' element={<BasketPage />} />
							<Route path='/register' element={<ModalRegister />} />
						</Routes>
					</ModalContext.Provider>
				</SearchContext.Provider>
			</ThemeProvider>
		</>
	)
}

export default App


