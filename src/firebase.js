import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBQJis8SmKLK94f-H1mtqCGRESOUFZw_Ns',
  authDomain: 'guia-jessica.firebaseapp.com',
  projectId: 'guia-jessica',
  storageBucket: 'guia-jessica.firebasestorage.app',
  messagingSenderId: '939837618481',
  appId: '1:939837618481:web:254395010e943e50dd9810'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)