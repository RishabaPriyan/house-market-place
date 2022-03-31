import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Explore from './pages/Explore'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
import Category from './pages/Category'
import PrivateRoutes from './components/PrivateRoutes'
import NavBar from './components/NavBar'
import CreateListing from './pages/CreateListing'
import EditListing from './pages/EditListing'
import Listing from './pages/Listing'
import Contact from './pages/Contact'
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Explore />}></Route>
					<Route path="/profile" element={<PrivateRoutes />}>
						<Route path="/profile" element={<Profile />}></Route>
					</Route>
					<Route path="/sign-in" element={<SignIn />}></Route>
					<Route path="/sign-up" element={<SignUp />}></Route>
					<Route path="/forgot-password" element={<ForgotPassword />}></Route>
					<Route path="/offers" element={<Offers />}></Route>
					<Route path="/category/:categoryName" element={<Category />} />
					<Route path="/create-listing" element={<CreateListing />} />
					<Route path="/edit-listing/:listingId" element={<EditListing />} />
					<Route
						path="/category/:categoryName/:listingId"
						element={<Listing />}
					/>
					<Route path="/contact/:landlordId" element={<Contact />} />
				</Routes>
				<NavBar />
			</Router>
			<ToastContainer />
		</>
	)
}

export default App
