import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyD8cEgBS3mV4_1Lmfwb6JLaPVmT-ZhN1Qc",
	authDomain: "taskmanagercrud-6694e.firebaseapp.com",
	projectId: "taskmanagercrud-6694e",
	storageBucket: "taskmanagercrud-6694e.firebasestorage.app",
	messagingSenderId: "486920153539",
	appId: "1:486920153539:web:655448dd98d3eac7af3576",
	measurementId: "G-E88WB1V18J"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const database = getFirestore(app);

export const database = initializeFirestore(app, {
	experimentalAutoDetectLongPolling: true,
});
