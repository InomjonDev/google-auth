import { Route, Routes } from 'react-router-dom'
import Login from './routes/auth/login/Login'
import ProtectedRoute from './routes/auth/protectedRoute'
import Register from './routes/auth/register/Register'
import Home from './routes/home/Home'

function App() {
	return (
		<Routes>
			<Route path='/' element={<ProtectedRoute element={<Home />} />} />
			<Route
				path='/login'
				element={<ProtectedRoute element={<Login />} requireAuth={false} />}
			/>
			<Route
				path='/register'
				element={<ProtectedRoute element={<Register />} requireAuth={false} />}
			/>
		</Routes>
	)
}

export default App
