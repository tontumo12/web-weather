<template>
  <v-app>
    <v-app-bar app color="light-blue darken-3">
      <v-row class="app-bar">
        <v-col cols="6">
          <div class="d-flex align-center">
            <v-img
              alt="weather logo"
              class="shrink logo"
              contain
              src="./assets/weather.jpg"
              min-width="65"
              width="65"
            />
            <h1
              class="display-2 font-weight-bold mb-1"
              style="color: white"
              >weather</h1>
          </div>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Filled"
            filled
            rounded
            dense
            chips
            color="blue-grey lighten-2"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { messagingToken } from "@/services/mesage-firebase";
import * as firebaseServive from "@/services/firebase";
export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
  created() {
    this.initFirebaseMessaging();
  },
  methods: {
    initFirebaseMessaging() {
      firebaseServive.initFirebase();
      const messaging = messagingToken();
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log(currentToken);
          } else {
            // Show permission request.
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
            // Show permission UI.
            // updateUIForPushPermissionRequired();
            // setTokenSentToServer(false);
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
          // showToken('Error retrieving Instance ID token. ', err);
          // setTokenSentToServer(false);
        });
      messaging.onMessage((payload) => {
        console.log(payload);
        alert(payload);
      });
    },
  },
};
</script>

<style  scoped>
.app-bar{
  margin-top:  25px;
}
</style>
