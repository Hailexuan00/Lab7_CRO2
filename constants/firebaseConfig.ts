import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyB4Y0s1HLK66zPW6LoAcihu1EqJM0bcc3U",
  authDomain: "lab7cro2.firebaseapp.com",
  projectId: "lab7cro2",
  storageBucket: "lab7cro2.appspot.com", // ⚠️ sửa lỗi ở đây (ban đầu bạn ghi sai domain `.app`)
  messagingSenderId: "32382563153",
  appId: "1:32382563153:web:9c1d562c15ee6194ce1970",
  measurementId: "G-3JW86EQQFG"
};

const app = initializeApp(firebaseConfig);

// ✅ Khởi tạo Auth với AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
