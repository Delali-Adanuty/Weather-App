import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCNQHPvEYYDDhNLEG8Fz6dIQ5LPBB2YnUU",
    authDomain: "weather-6934b.firebaseapp.com",
    projectId: "weather-6934b",
    storageBucket: "weather-6934b.firebasestorage.app",
    messagingSenderId: "1039016872117",
    appId: "1:1039016872117:web:a540f3f2716e278e5e16fc"
};

const app = initializeApp(firebaseConfig);

export default app;