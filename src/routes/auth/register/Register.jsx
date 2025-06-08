import { FaGithub, FaGoogle } from 'react-icons/fa'
import './Register.css'

function Register() {
	const handleRegister = e => {
		e.preventDefault()
	}
	return (
		<div className='register-page'>
			<div className='register-container'>
				<h2 className='register-title'>Register Page</h2>
				<div className='form-social'>
					<button className='form-social-button'>
						<FaGoogle />
						<span>Register with Google</span>
					</button>
					<button className='form-social-button'>
						<FaGithub />
						<span>Register with GitHub</span>
					</button>
				</div>
				<hr />
				<form className='register-form' onSubmit={handleRegister}>
					<input
						type='text'
						placeholder='Enter username'
						required
						className='register-form-input'
					/>
					<input
						type='email'
						placeholder='Enter email'
						required
						className='register-form-input'
					/>
					<input
						type='password'
						placeholder='Enter password'
						required
						className='register-form-input'
					/>
					<button type='submit' className='register-form-button'>
						Register
					</button>
				</form>
			</div>
		</div>
	)
}

export default Register
