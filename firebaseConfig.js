// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app"
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const connectFirebaseApp = () => {
    const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    }

    if (getApps().length === 0) {
        const app = initializeApp(firebaseConfig)
        const db = getStorage(app)

        if (typeof window !== "undefined") {
            if ("measurementId" in firebaseConfig) {
                getAnalytics()
            }
            getAnalytics()
        }
        return app
    }
}
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
export const app = connectFirebaseApp()
export const db = getStorage(app)
