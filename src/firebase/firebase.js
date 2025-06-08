import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBCLKuNmOlmCKjZajieH4QA6s0CREJifd8',
	authDomain: 'auth-5d2f5.firebaseapp.com',
	projectId: 'auth-5d2f5',
	storageBucket: 'auth-5d2f5.firebasestorage.app',
	messagingSenderId: '155516943568',
	appId: '1:155516943568:web:7a12928890bbae26ed72d5',
	measurementId: 'G-H59CKP53VG',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }
