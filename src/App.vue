<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->
        <v-img
          alt = "weather logo"
          class="shrink logo"
          contain
          src = "./assets/weather.jpg"
          min-width = "65"
          width = 65
        />
        <h1 class="display-1.5 font-weight-bold mb-3">
          weather
        </h1>
        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>
      <router-link to="/login">
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      </router-link>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import {messagingToken} from '@/services/mesage-firebase'
import * as firebaseServive from '@/services/firebase'
export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
  created() {
    this.initFirebaseMessaging()
  },
  methods: {
    initFirebaseMessaging() {
      firebaseServive.initFirebase();
      const messaging = messagingToken()
      messaging.getToken().then((currentToken) => {
        if (currentToken) {
          console.log(currentToken)
        } else {
          // Show permission request.
          console.log('No Instance ID token available. Request permission to generate one.');
          // Show permission UI.
          // updateUIForPushPermissionRequired();
          // setTokenSentToServer(false);
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // showToken('Error retrieving Instance ID token. ', err);
        // setTokenSentToServer(false);
      });
      messaging.onMessage((payload) => {
        console.log(payload)
        alert(payload)
      });
    }
  },
};
</script>
