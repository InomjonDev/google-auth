import Navbar from '../../components/navbar/Navbar'
import { useAuth } from '../../contexts/authContext'
import useRedirectToLogin from '../../hooks/useRedirectToLogin'

function Home() {
	const { currentUser } = useAuth()
	useRedirectToLogin(!currentUser)

	if (!currentUser) return null

	return (
		<div>
			<Navbar />
			<h2>Home</h2>
			<h3>
				Hello {currentUser.displayName || currentUser.email}, you are now logged
				in
			</h3>
		</div>
	)
}

export default Home
