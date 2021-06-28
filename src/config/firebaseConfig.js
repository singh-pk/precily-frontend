import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseApp = firebase.initializeApp({
  projectId: 'precily-ae106',
  appId: '1:1047716232267:web:184b7415155a10f306e1ce',
  storageBucket: 'precily-ae106.appspot.com',
  locationId: 'asia-south1',
  apiKey: 'AIzaSyAhiG1aoexK8CqHhL8brCbYQkbShewPRA8',
  authDomain: 'precily-ae106.firebaseapp.com',
  messagingSenderId: '1047716232267',
});

export default firebaseApp;
