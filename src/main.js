import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import firebase from 'firebase/app'
import 'firebase/messaging'
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAz4cecT3HvDHlcLz-wCNyOOClhjC_6Jio",
  authDomain: "tunt-16c2b.firebaseapp.com",
  databaseURL: "https://tunt-16c2b.firebaseio.com",
  projectId: "tunt-16c2b",
  storageBucket: "tunt-16c2b.appspot.com",
  messagingSenderId: "1038660838040",
  appId: "1:1038660838040:web:1afe957768c354c19ba6ed",
  measurementId: "G-GS6LJMLP6R"
})
const messaging = firebase.messaging()
messaging.usePublicVapidKey('BGWHgRsHK0QLdkStHWdhDUa0qZxZTc7efX8hYoWXl6ZfigxWI3zqyiYBs-Q8CR-gKsIQXuQ14t8qhWl3xN8N45s')
messaging.getToken().then((currentToken) => {
  if (currentToken) {
  console.log("Token: " + currentToken);
  } else {
  // Show permission request.
  console.log('No Instance ID token available. Request permission to generate one.');
  }
  }).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  });
  messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
  });
  
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
