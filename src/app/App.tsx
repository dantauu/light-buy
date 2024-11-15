import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home.tsx"
import { Layout } from "../components/Layout/Layout.tsx"

function App() {
  return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* <Route path='' element={<Home />} index /> */}
				<Route path="/home" element={<Home />} />
			</Route>
		</Routes>
	)
}

export default App


