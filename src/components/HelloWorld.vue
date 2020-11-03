<template>
  <v-container>
    <!-- <v-row class="text-center" justify-lg = "12">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row> -->
    <v-row class="text-center">
      <v-col cols="6">
        <h1 class="display-2 font-weight-bold mb-2">Hà Nội</h1>
        <h1>Nhiệt độ : 20</h1>
        <h1>Độ Ẩm: 80%</h1>
        <h1>Tốc độ gió: 14km/h</h1>
        <h1>Khả năng mưa : 90%</h1>
      </v-col>
      <v-col cols="6">
        <v-card class="body" style="background-color:#010a3d;">
          <div class="layer-1">
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
            <div class="rain-drop"></div>
          </div>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
<style scoped>
.body {
  background-color: #010a3d;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.rain-drop {
  position: fixed;
  top: -100px;
  width: 1px;
  height: 100px;
  background-image: linear-gradient(to bottom, transparent, white);
}
.rain-drop:nth-child(2) {
  left: 10%;
  animation: rainFall 0.8s linear 2s infinite;
}
.rain-drop:nth-child(3) {
  left: 15%;
  animation: rainFall 0.7s linear 1s infinite;
}
.rain-drop:nth-child(4) {
  left: 35%;
  animation: rainFall 0.7s linear 0.1s infinite;
}
.rain-drop:nth-child(5) {
  left: 65%;
  animation: rainFall 0.7s linear 0.3s infinite;
}
.rain-drop:nth-child(6) {
  left: 80%;
  animation: rainFall 0.8s linear 0.9s infinite;
}
.rain-drop:nth-child(7) {
  left: 90%;
  animation: rainFall 0.6s linear 1.1s infinite;
}
.rain-drop:nth-child(8) {
  left: 82%;
  animation: rainFall 0.7s linear 0.4s infinite;
}
.rain-drop:nth-child(9) {
  left: 95%;
  animation: rainFall 0.7s linear 1s infinite;
}
.rain-drop:nth-child(10) {
  left: 53%;
  animation: rainFall 0.8s linear 0.5s infinite;
}
.rain-drop:nth-child(11) {
  left: 45%;
  animation: rainFall 0.8s linear 0.5s infinite;
}
.rain-drop:nth-child(12) {
  left: 5%;
  animation: rainFall 0.8s linear 0.2s infinite;
}
.rain-drop:nth-child(13) {
  left: 33%;
  animation: rainFall 0.8s linear 0.65s infinite;
}
.rain-drop:nth-child(14) {
  left: 66%;
  animation: rainFall 0.7s linear 0.35s infinite;
}
.rain-drop:nth-child(15) {
  left: 53%;
  animation: rainFall 0.8s linear 0.2s infinite;
}
@keyframes rainFall {
  0% {
    top: -100px;
  }
  50% {
    top: 100vh;
  }
  100% {
    top: 100vh;
  }
}

</style>
