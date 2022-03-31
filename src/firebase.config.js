import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyBlptV57l85gKqfrWFkGQDp9KphX-NVS04',
	authDomain: 'house-marketplace-app-cbc48.firebaseapp.com',
	projectId: 'house-marketplace-app-cbc48',
	storageBucket: 'house-marketplace-app-cbc48.appspot.com',
	messagingSenderId: '474230095639',
	appId: '1:474230095639:web:80f93bbae1b020ceda4152',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
