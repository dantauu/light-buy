import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home.tsx"
import { Layout } from "../components/Layout/Layout.tsx"
import { MoreCard } from "../components/CompMoreCard/MoreCard/MoreCard.tsx"

function App() {
  return (
  		<>
			<Routes>
			<Route path="/" element={<Layout />}>
				<Route path='/' element={<Home />} index />
				<Route path='/more-card/:id' element={<MoreCard />} />
			</Route>
			</Routes>
		</>
	)
}

export default App


