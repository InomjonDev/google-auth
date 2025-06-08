import { Link } from 'react-router-dom'
import { doSignOut } from '../../firebase/auth'
import './Navbar.css'

function Navbar() {
	const handleLogout = () => {
		doSignOut()
	}
	return (
		<nav className='navbar'>
			<div className='navbar-logo'>Google Auth</div>
			<ul className='navbar-links'>
				<li>
					<Link to='/register'>Register</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
				<li>
					<button className='logout-btn' onClick={handleLogout}>
						Logout
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
