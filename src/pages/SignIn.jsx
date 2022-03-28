import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
function SignIn() {
	const [showPassword, setShowPassword] = useState(false)
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	const { email, password } = formData
	const onChange = () => {}
	return (
		<div className="pageContainer">
			<header className="pageHeader">Welcome Back!</header>
			<form>
				<input
					type="email"
					value={email}
					className="emailInput"
					onChange={() => onChange()}
				/>
				<div className="passwordInputDiv">
					<input type="text" className="passwordInput" value={password} />
					<img
						src={visibilityIcon}
						alt="Show Password"
						className="showPassword"
					/>
				</div>
				<Link to="/forgot-password" className="forgotPasswordLink">
					Forgot Password
				</Link>
				<div className="signInBar">
					<p className="signInText">Sign In</p>
					<button className="signInButton">
						<ArrowRightIcon fill="#ffffff" />
					</button>
				</div>
			</form>

			{/* Google OAuth */}
			<Link className="registerLink" to="/sign-up">
				Sign Up instead
			</Link>
		</div>
	)
}

export default SignIn
