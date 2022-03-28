import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import Offers from './pages/Offers'

import NavBar from './componenets/NavBar'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Explore />}></Route>
					<Route path="/profile" element={<SignIn />}></Route>
					<Route path="/sign-in" element={<SignIn />}></Route>
					<Route path="/sign-up" element={<SignUp />}></Route>
					<Route path="/forgot-password" element={<ForgotPassword />}></Route>
					<Route path="/offers" element={<Offers />}></Route>
				</Routes>
				<NavBar />
			</Router>
		</>
	)
}

export default App
